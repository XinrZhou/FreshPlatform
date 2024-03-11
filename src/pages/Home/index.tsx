import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ImageBackground, Animated, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryList } from "store/slices/classificationSlice";
import CustomStyleSheet from "styles";
import LocationSelector from "components/LocationSelector";
import BannerSwiper from "./BannerSwiper";
import StickyHeader from "./StickyHeader";
import NavCardItem from "./NavCardItem";


const THEME_BACKGROUD = [
  'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/qq_pic_merged_1710143355054.jpg',
  'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/qq_pic_merged_1710143370862.jpg'
]

const THEME_COLOR = [
  {
    start: 'rgba(227, 191, 150, 1)',
    end: 'rgba(227, 191, 150, 0)',
  },
  {
    start: 'rgba(97, 199, 224, 1)',
    end: 'rgba(97, 199, 224, 0)',
  }
]

const NAV_LEVEL = 1;

const Home: React.JSX.Element = () => {
  const stickyTopY = useRef(60).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScroll,setIsScroll]= useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);

  const dispatch = useDispatch();
  const { firstCategoryList} = useSelector(state => state.classification);

  useEffect(() => {
    dispatch(getCategoryList(NAV_LEVEL));
  }, []);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= 0) {
      setIsScroll(false);
    } else if (offsetY > 0 && !isScroll) {
      setIsScroll(true);
    }
  };

  const handleSwiperChange = (index: number) => setSwiperIndex(index);


  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.containerWrapper}
      >
        <ImageBackground
          source={{ uri: THEME_BACKGROUD[swiperIndex] }}
          style={[styles.imageBackground]}
        >
          {/* 位置 */}
          <View style={styles.headerContainer}>
            <LocationSelector />
          </View>
          {/* 搜索框吸顶 */}
          <StickyHeader
            stickyTopY={stickyTopY}
            stickyScrollY={scrollY} 
            isScroll={isScroll}
            themeColor={THEME_COLOR[swiperIndex].start}
          />   
          {/* banner轮播图 */}
          <View style={styles.bannerContainer}>
            <BannerSwiper handleSwiperChange={handleSwiperChange} />
          </View>  
        </ImageBackground>  
        {/* 渐变效果 */}
        <LinearGradient 
          colors={[
            THEME_COLOR[swiperIndex].start, 
            THEME_COLOR[swiperIndex].end, 
            THEME_COLOR[swiperIndex].end, 
            THEME_COLOR[swiperIndex].end, 
          ]} 
        >
          <View style={styles.navCard}>
            {
              firstCategoryList.map(item => {
                return (
                  <NavCardItem navItem={item} key={item.id} />
                )
              })
            }
          </View>
        </LinearGradient>
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

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
  },

  bannerContainer: {
    marginTop: 36,
    marginHorizontal: 20,
    height: 120,
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