import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "assets/fonts";
import { CATEGORY_LEVEL } from "constants/enums";
import { 
  getCategoryList, 
  getCategoryListByParentId,
  getProductList 
} from "store/slices/classificationSlice";
import { addCart, getCart } from "store/slices/shoppingCartSlice";
import CustomStyleSheet from "styles";
import ScrollNavBar from "components/ScrollNavBar";
import ScrollSquareNav from "./ScrollSquareNav";
import FeedsList from "components/FeedsList";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import { Category } from "/types/type";

const NAV_IMAGE_URL = "https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/QQ%E5%9B%BE%E7%89%8720240311130900.png";

const Classification: React.JSX.Element = ({navigation, route}: any) => {
  const [colNavActiveIndex, setColNavActiveIndex] = useState(0);
  const [rowNavActiveIndex, setRowNavActiveIndex] = useState(0);
  const { isLogin } = useSelector(state => state.user);
  const { cartCount } = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    isLogin && dispatch(getCart());
    dispatch(getCategoryList(CATEGORY_LEVEL.FIRST));
  }, []);

  const { 
    firstCategoryList, 
    secondCategoryList, 
    thirdCategoryList,
    productList 
  } = useSelector(state => state.classification);
  const { userInfo } = useSelector(state => state.user);

  useEffect(() => {
    if (firstCategoryList.length > 0) {
      const pid = firstCategoryList[0].id;
      dispatch(getCategoryListByParentId({ pid, level: CATEGORY_LEVEL.SECOND }));
    }
  }, [firstCategoryList]);

  useEffect(() => {
    if (secondCategoryList.length > 0) {
      const pid = secondCategoryList[0].id;
      dispatch(getCategoryListByParentId({ pid, level: CATEGORY_LEVEL.THIRD }));
    }
  }, [secondCategoryList]);

  useEffect(() => {
    if (thirdCategoryList.length > 0) {
      const pid = thirdCategoryList[0].id;
      dispatch(getProductList(pid))
    }
  }, [thirdCategoryList])

  // 一级类目导航
  const handleNavIndexChange = (index: number, pid: string) => {
    setColNavActiveIndex(0);
    setRowNavActiveIndex(0);
    dispatch(getCategoryListByParentId({ pid, level: CATEGORY_LEVEL.SECOND }));
  };

  // 二级类目导航
  const handleColNavIndexChange = (index: number, item: Category) => {
    setColNavActiveIndex(index);
    setRowNavActiveIndex(0);
    dispatch(getCategoryListByParentId({ pid: item.id, level: CATEGORY_LEVEL.THIRD }));
  };

  // 三级类目导航
  const handleRowNavIndexChange = (index: number, item: Category) => {
    setRowNavActiveIndex(index);
    dispatch(getProductList(item.id))
  };

  const handleAddCart = async(sid) => {
    await dispatch(addCart({ skuId: sid, userId: userInfo.id }));
    await dispatch(getCart());
  };

  const handleFeedsItemClick = (params) => {
    navigation.navigate('ProductDetail', { 
      id: params.id
    });
  }


  return (
    <View>
      {/* 搜索框 */}
      <View style={styles.searchBox}>
        <Icon name="icon-left" size={24} color={"#000"} />
        <SearchBar cartCount={cartCount} />
      </View>
      {/* 一级导航 */}
      <View>
        <ScrollNavBar
          navList={firstCategoryList}
          handleNavIndexChange={handleNavIndexChange}
        />
      </View>
      <View style={styles.feedsContainer}>
        {/* 二级导航 */}
        <View style={styles.feedsColNav}>
          {secondCategoryList.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.colNavItem,
                index === colNavActiveIndex && styles.colNavActiveItem,
                index === 0 && { borderTopLeftRadius: 24 }
              ]}
              onPress={() => handleColNavIndexChange(index, item)}
            >
              {item.name}
            </Text>
          ))}
        </View>
        <View style={styles.feedsWrapper}>
          {/* 三级导航 */}
          <View style={styles.feedsRowNav}>
            <ScrollSquareNav
              navList={thirdCategoryList}
              navIndex={rowNavActiveIndex}
              setNavIndex={setRowNavActiveIndex}
              handleNavIndexChange={handleRowNavIndexChange}
            />
            <Icon style={styles.navIcon} name="icon-down" size={24} color={"#000"} />
          </View>
          <View style={styles.sortNav}>
            <Image source={{ uri: NAV_IMAGE_URL }} style={styles.leftArea} />
            <View style={styles.rightArea}>
              <NavItem name="销量" attribute="saleCount" />
              <NavItem name="价格" attribute="price" />
            </View>
          </View>
          {/* 商品feeds流 */}
          <FeedsList
            data={productList} 
            numColumns={1}
            handleAddCart={handleAddCart}
            handleFeedsItemClick={handleFeedsItemClick} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = CustomStyleSheet.create({
  searchBox: {
    marginTop: 12,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  feedsContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  feedsColNav: {
    width: 120,
    borderTopLeftRadius: 24,
    backgroundColor: "#F5F5F5"
  },
  colNavItem: {
    top: "auto",
    bottom: "auto",
    height: 48,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#000"
  },
  colNavActiveItem: {
    backgroundColor: "#fff",
    color: "#17A3D4",
    fontWeight: "bold"
  },
  feedsWrapper: {
    flex: 1
  },
  feedsRowNav: {
    width: "100%",
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row"
  },
  navIcon: {
    marginHorizontal: 8
  },
  sortNav: {
    marginVertical: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftArea: {
    flex: 1,
    marginLeft: 8,
    width: 48,
    height: 18
  },
  rightArea: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default Classification;
