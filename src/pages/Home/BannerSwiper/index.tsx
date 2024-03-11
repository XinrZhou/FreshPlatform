import React, { useState, useRef } from "react";
import { Text, View, Image } from "react-native";
import Swiper from 'react-native-swiper';
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";

const BannerSwiper: React.JSX.Element = () => {

  return (
    <Swiper style={styles.swiper} 
      showsButtons={false} 
      autoplay
    >
      <Image
        source={{
          uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/qq_pic_merged_1710143355054.jpg'
        }}
        style={styles.swiperImage}
      />
      <Image
        source={{
          uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/qq_pic_merged_1710143355054.jpg'
        }}
        style={styles.swiperImage}
      />
    </Swiper>
  );
}

const styles = CustomStyleSheet.create({
  swiperImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    objectFit: 'cover'
  }
})

export default BannerSwiper;