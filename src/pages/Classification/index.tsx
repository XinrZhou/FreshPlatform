import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "assets/fonts";
import { CATEGORY_LEVEL } from "constants/enums";
import { getCategoryList, getCategoryListByParentId } from "store/slices/classificationSlice";
import CustomStyleSheet from "styles";
import ScrollNavBar from "components/ScrollNavBar";
import ScrollSquareNav from "./ScrollSquareNav";
import FeedsList from "components/FeedsList";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import { Category } from "/types/type";

const NAV_IMAGE_URL = "https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/QQ%E5%9B%BE%E7%89%8720240311130900.png";

const Classification: React.JSX.Element = () => {
  const [colNavActiveIndex, setColNavActiveIndex] = useState(0);
  const [rowNavActiveIndex, setRowNavActiveIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList(CATEGORY_LEVEL.FIRST));
  }, []);

  const { firstCategoryList, secondCategoryList, thirdCategoryList } = useSelector(state => state.classification);

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

  const handleNavIndexChange = (index: number, pid: string) => {
    dispatch(getCategoryListByParentId({ pid, level: CATEGORY_LEVEL.SECOND }));
  };

  const handleColNavIndexChange = (index: number, item: Category) => {
    setColNavActiveIndex(index);
    dispatch(getCategoryListByParentId({ pid: item.id, level: CATEGORY_LEVEL.THIRD }));
  };

  const handleRowNavIndexChange = (index: number, item: Category) => {
    setRowNavActiveIndex(index);
  };

  return (
    <View>
      <View>
        <View style={styles.searchBox}>
          <Icon name="icon-left" size={24} color={"#000"} />
          <SearchBar />
        </View>
        <ScrollNavBar
          navList={firstCategoryList}
          handleNavIndexChange={handleNavIndexChange}
        />
      </View>
      <View style={styles.feedsContainer}>
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
          <View style={styles.feedsRowNav}>
            <ScrollSquareNav
              navList={thirdCategoryList}
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
          {/* <FeedsList data={data} numColumns={1} /> */}
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
