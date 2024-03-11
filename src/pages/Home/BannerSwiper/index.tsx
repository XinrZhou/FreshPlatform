import React, { useState, useRef } from "react";
import { Text, View, Image } from "react-native";
import Swiper from 'react-native-swiper';
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";

const BannerSwiper: React.JSX.Element = ({
  handleSwiperChange,
}) => {

  return (
    <Swiper style={styles.swiper} 
      showsButtons={false} 
      autoplay
      autoplayTimeout={5}
      onIndexChanged={index => handleSwiperChange(index)}
    >
      <Image
        source={{
          uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/qq_pic_merged_1710143355054.jpg'
        }}
        style={styles.swiperImage}
      />
      <Image
        source={{
          uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/qq_pic_merged_1710143370862.jpg'
        }}
        style={styles.swiperImage}
      />
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
    borderRadius: 16,
    objectFit: 'cover'
  }
})

export default BannerSwiper;