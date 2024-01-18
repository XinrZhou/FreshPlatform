import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import SearchBar from "../../components/SearchBar";
import BannerCard from "../../components/AnimateBanner/BannerCard";
import GoodsFeeds from "../../components/GoodsFeeds";
import { Icon } from "../../assets/fonts";
import AnimateBanner from "../../components/AnimateBanner";


const Home: React.JSX.Element = () => {

  return (
    <View style={styles.containerWrapper}>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.leftArea}>
            <Icon 
              name="icon-left"
              size={24}
              color={'#fff'}
            />
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
        <SearchBar />
      </View>
      <Image
          style={styles.headerBackground} 
          source={{
            height: 100,
            width: 750,
            uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.Ix2oOx8x9J1aLDeAQXatpQHaED?rs=1&pid=ImgDetMain'
          }}
        />
      <View style={styles.bannerContainer}>
        <AnimateBanner />
      </View>
      <View style={styles.feedsContainer}>
        <GoodsFeeds />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    backgroundColor: '#fff',
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
    fontSize: 24,
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