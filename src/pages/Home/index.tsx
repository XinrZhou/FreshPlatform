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
import BannerCard from "../../components/AnimateBanner/BannerCard";
import { Icon } from "../../assets/fonts";
import AnimateBanner from "../../components/AnimateBanner";
import StickyHeader from "./StickyHeader";
import GoodsFeeds from "../../components/GoodsFeeds";

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
          <View style={styles.leftArea}>
            <Text style={styles.leftText}>
              Siruis生鲜
            </Text>
          </View>
          <View style={styles.rightArea}>
            <Text style={styles.rightText}>
            自提点：天猫超市
            </Text>
            <Icon 
              name="icon-right"
              size={16}
              color={'#fff'}
            />
          </View>
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
        {/* 商品feed流 */}
        <GoodsFeeds />
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

  leftArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },

  rightArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightText: {
    color: '#fff',
    fontSize: 16,
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