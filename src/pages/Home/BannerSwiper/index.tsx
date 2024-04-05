import React, { useState, useRef } from "react";
import { Text, View, Image } from "react-native";
import Swiper from 'react-native-swiper';
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";

const BannerSwiper: React.JSX.Element = ({
  bannerList = [],
  handleSwiperChange,
}) => {

  return (
    <Swiper style={styles.swiper} 
      showsButtons={false} 
      autoplay={true}
      autoplayTimeout={5}
      loop={true}
      onIndexChanged={index => handleSwiperChange(index)}
    >
      {
        bannerList.map((item, index) => {
          return (
            <Image
              key={index}
              source={{
                uri: item
              }}
              style={styles.swiperImage}
            />
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
    borderRadius: 16,
    objectFit: 'cover'
  }
})

export default BannerSwiper;