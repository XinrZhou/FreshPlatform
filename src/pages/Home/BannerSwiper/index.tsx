import React, { useState, useRef } from "react";
import { Text, View, Image, ImageBackground, Button, Pressable } from "react-native";
import Swiper from 'react-native-swiper';
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";

const BannerSwiper: React.JSX.Element = ({
  bannerList = [],
  bannerContentList = [],
  bannerTitleList = [],
  handleSwiperChange,
}) => {

  return (
    <Swiper style={styles.swiper} 
      autoplay={true}
      autoplayTimeout={3}
      loop={true}
      onIndexChanged={index => handleSwiperChange(index)}
    >
      {
        bannerList.map((item, index) => {
          return (
            <ImageBackground 
              key={index} 
              style={styles.swiperImage} 
              source={{ uri: item }}
              imageStyle={{borderRadius: 16}}
            >
              <View style={styles.bannerWrapper}>
                <Text style={styles.swiperTitle}>
                  { bannerTitleList[index] }
                </Text>
                <Text style={styles.swiperContent}>
                  { bannerContentList[index] }
                </Text>
                <Pressable>
                  <View style={styles.bannerBtn}>
                    <Text style={styles.btnText}>
                      立即抢购
                    </Text>
                    <Icon name="icon-right" size={16} color="#ccc" />
                  </View>
                </Pressable>
              </View>
            </ImageBackground>
          )
        })
      }
    </Swiper>
  );
}

const styles = CustomStyleSheet.create({
  swiper: {
    borderRadius: 16,
  },
  swiperImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    objectFit: 'cover',
  },
  bannerWrapper: {
    marginLeft: 16,
  },
  swiperTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  swiperContent: {
    color: '#fff',
    fontSize: 14,
  },
  bannerBtn: {
    marginTop: 8,
    width: 66,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#fff'
  },
  btnText: {
    fontSize: 10
  }
})

export default BannerSwiper;