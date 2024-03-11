import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ImageBackground,
  FlatList,
  Animated,
  ScrollView 
} from "react-native";
import BannerCard from "components/BannerCard";
import AnimateBanner from "components/AnimateBanner";
import FeedsList from "components/FeedsList";
import LocationSelector from "components/LocationSelector";
import StickyHeader from "./StickyHeader";
import { Icon } from "assets/fonts";

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: '精品草莓',
    price: '20.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: '精品车厘子',
    price: '50.99',
    saleAttribute: '限时秒杀',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: '精品黄瓜',
    price: '5.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2222',
    name: '精品草莓',
    price: '20.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa456',
    name: '精品车厘子',
    price: '50.99',
    saleAttribute: '百亿补贴',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e246456',
    name: '精品黄瓜',
    price: '5.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbfdsf',
    name: '精品草莓',
    price: '20.99',
    saleAttribute: '百亿补贴',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aavgrtg',
    name: '精品车厘子',
    price: '50.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dooo',
    name: '精品黄瓜',
    price: '5.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
];

const Home: React.JSX.Element = () => {
  const stickyTopY = useRef(60).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScroll,setIsScroll]= useState(false);
  const [offsetY,setOffsetY] = useState(0);

  return (
    <View >
      <Animated.ScrollView
        onScroll={
          Animated.event([{
            nativeEvent: {
              contentOffset: {y: scrollY}
            },
          }], { 
            useNativeDriver: true,
            listener: (e) => {
              if (e.nativeEvent.contentOffset.y <= 0) {
                setIsScroll(false);
              } else if (e.nativeEvent.contentOffset.y > 0 && !isScroll) {
                setIsScroll(true);
              }
            }
          })
        }
        style={styles.containerWrapper}
      >
        <View style={styles.headerContainer}>
          <LocationSelector />
        </View>
        <Image
          style={styles.headerBackground} 
          source={{
            height: 100,
            width: 750,
            uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.Ix2oOx8x9J1aLDeAQXatpQHaED?rs=1&pid=ImgDetMain'
          }}
        />
        {/* 搜索框吸顶 */}
        <StickyHeader
          stickyTopY={stickyTopY}
          stickyScrollY={scrollY} 
          isScroll={isScroll}
        />   
        {/* banner模块 */}
        <View style={styles.bannerContainer}>
          <AnimateBanner />
        </View>
        {/* 商品feeds */}
        <FeedsList
          horizontal={false}
          data={data}
          numColumns={2} 
          columnWrapperStyle={{
            justifyContent: 'space-between'
          }}
        />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    height: '100%',
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 10, 
    paddingRight: 10,
  },

  headerBackground: {
    zIndex: -1,
    position: 'absolute',
    height: 160,
  },

  bannerContainer: {
    marginTop: 16,
    backgroundColor: '#FFEBEC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  bannerTitle: {
    paddingTop: 6,
    textAlign: 'center',
    color: '#FF3043',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  bannerContent: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home;