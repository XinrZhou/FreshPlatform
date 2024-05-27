import React, { useState, useRef, useEffect, useMemo } from "react";
import { 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  Animated, 
  ScrollView 
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getCart } from "store/slices/shoppingCartSlice";
import { getPageInfo, getProductList } from "store/slices/homeSlice";
import { getCategoryList } from "store/slices/classificationSlice";
import CustomStyleSheet from "styles";
import BannerSwiper from "./BannerSwiper";
import StickyHeader from "./StickyHeader";
import NavCardItem from "./NavCardItem";
import AnimateBanner from "components/AnimateBanner";
import FeedsList from "components/FeedsList";

const PAGE_NAME = 'Home';
const NAV_LEVEL = 1;
const PAGE_SIEZ = 20;

const Home: React.JSX.Element = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [stickyTopY, setStickyTopY] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);
  const { pageInfo, productList } = useSelector(state => state.home);
  const { firstCategoryList } = useSelector(state => state.classification);

  const themeColors = Object.keys(pageInfo)
    .filter(key => key.startsWith('themeColor'))
    .map(key => pageInfo[key]);
  const bannerContentList = Object.keys(pageInfo)
    .filter(key => key.startsWith('bannerContent'))
    .map(key => pageInfo[key]);
  const bannerTitleList = Object.keys(pageInfo)
    .filter(key => key.startsWith('bannerTitle'))
    .map(key => pageInfo[key]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getPageInfo(PAGE_NAME));
      dispatch(getCategoryList(NAV_LEVEL));
      dispatch(getProductList({ page: page, pageSize: PAGE_SIEZ }));
    }, [])
  )

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y || 0;
    if (offsetY <= 0) {
      setIsScroll(false);
    } else if (offsetY > 0 && !isScroll) {
      setIsScroll(true);
    }
  };

  const handleSwiperChange = (index: number) => setSwiperIndex(index);

  const handleNavItemClick = (navItem) => navigation.navigate('分类', { navItem });

  // 地址变化
  const handleLocationChange = () => dispatch(getProductList({ page: page, pageSize: PAGE_SIEZ }));

  const handleAddCart = async(sid) => {
    await dispatch(addCart({ skuId: sid, userId: userInfo.id }));
    await dispatch(getCart());
  };

  const handleFeedsItemClick = (params) => {
    navigation.navigate('ProductDetail', { 
      id: params.id
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={
          Animated.event(
            [{
                nativeEvent: { contentOffset: { y: scrollY} }
            }],
            { 
              useNativeDriver: false,
              listener: handleScroll 
            }
          )
        }
        scrollEventThrottle={1}
        style={styles.containerWrapper}
      >
        <View
          style={[
            styles.imageBackground, 
            {
              backgroundColor: themeColors[swiperIndex] 
            }
          ]}
        >
          {/* 搜索框吸顶 */}
          <StickyHeader
            stickyTopY={stickyTopY} 
            stickyScrollY={scrollY} 
            isScroll={isScroll}
            themeColor={themeColors[swiperIndex]}
            onLocationChange={handleLocationChange}
          />
          {/* banner轮播图 */}
          <View style={styles.bannerContainer}>
            <BannerSwiper 
              bannerList={pageInfo.bannerImages}
              bannerContentList={bannerContentList}
              bannerTitleList={bannerTitleList}
              handleSwiperChange={handleSwiperChange} 
            />
          </View>  
        </View>  
        {/* 渐变效果 */}
        <LinearGradient 
          colors={[
            themeColors[swiperIndex] || 'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
          ]} 
        >
          <View style={styles.navCard}>
            {
              firstCategoryList.map(item => {
                return (
                  <NavCardItem 
                    navItem={item} 
                    key={item.id} 
                    handleNavItemClick={handleNavItemClick}
                  />
                )
              })
            }
          </View>
        </LinearGradient>
        {/* 商品feeds流 */}
        <FeedsList
          data={productList}
          numColumns={2}
          handleAddCart={handleAddCart}
          handleFeedsItemClick={handleFeedsItemClick} 
          headerComponents
        />
      </ScrollView>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    flex: 1,
  },

  containerWrapper: {
    height: '100%',
  },

  bannerContainer: {
    marginHorizontal: 20,
    height: 120,
    borderRadius: 16,
  },

  imageBackground: {
    height: 246,
  },

  navCard: {
    marginTop: -22,
    marginHorizontal: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    borderRadius: 16,
  }
})

export default Home;