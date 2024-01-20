import React, { useRef, useEffect, useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import BannerCard from "./BannerCard";
import { Icon } from "../../assets/fonts";

const customFlipInX = {
  0: {
    opacity: 0,
    rotateX: '90deg',
    scale: 1
  },
  0.5: {
    opacity: 1,
    rotateX: '10deg',
  },
  1: {
    opacity: 1,
    rotateX: '0deg',
    scale: 2
  },
};


const AnimateBanner: React.JSX.Element = () => {
  const [data, setData] = useState([
    { id: 1, name: '推荐', url: "https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain", price: '9.9秒杀' },
    { id: 2, name: '蔬菜', url: "https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain", price: '9.9秒杀' },
    { id: 3, name: '肉蛋', url: "https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain", price: '9.9秒杀' },
    { id: 4, name: '水果', url: "https://th.bing.com/th/id/OIP.eqrTC1DowWkUJAq0KJCMHwHaEl?rs=1&pid=ImgDetMain", price: '满199减30' },
  ]);

  const [noticeList, setNoticeList] = useState([
    "年货节最佳攻略",
    "今日腊八节",
    "车厘子上新"
  ])

  return (
    <SafeAreaView>
      <View style={styles.noticeWrapper}>
        <Icon name="icon-laba" size={24} color={'#FF5043'}/>
        {
          noticeList.map((item, index) => {
            return (
              <Text 
                key={index}
                style={[
                  styles.noticeText,
                  index == 0 && styles.specialNoticeText
                ]}
              >
                {item}
              </Text>
            )
          })
        }
      </View>
      <ImageBackground
        source={{
          uri: 'https://pic.mksucai.com/00/42/73/cae8e06eaada3238.webp'
        }} 
        style={[
          styles.contianerWrapper,
          styles.topContainer
        ]}
      >
        <BannerCard item={data[0]}/>
          <Animatable.Text 
            animation={customFlipInX}
            iterationCount="infinite"
            style={styles.bannerTitle}
          >
            年货节大卖
          </Animatable.Text>
        <BannerCard item={data[1]}/>
      </ImageBackground>
      <View style={styles.contianerWrapper}>
        {
          data.map((item, index) => {
            return (
              <BannerCard 
                item={item} 
                index={index}
                position="bottom"
                key={item.id}
              />
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contianerWrapper: {
    marginHorizontal: 12,
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  noticeWrapper: {
    marginHorizontal: 12,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  noticeText: {
    marginTop: 12,
    marginHorizontal: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: '#57C31F',
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },

  specialNoticeText: {
    color: '#C64F04',
    backgroundColor: '#F6D7CE',
  },

  topContainer: {
    marginTop: 12,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 12, 
    paddingBottom: 12
  },

  bannerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
})

export default AnimateBanner;