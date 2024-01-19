import React, { useRef, useEffect, useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import BannerCard from "./BannerCard";

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

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={styles.backgroundWrapper}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.PJ2Nx9jJzw6AD-T4qQJTjwHaKX?rs=1&pid=ImgDetMain'
        }}
      >
        <View style={[
          styles.contianerWrapper,
          styles.topContainer
        ]}>
          <BannerCard item={data[0]}/>
          <Animatable.Text 
            animation={customFlipInX}
            iterationCount="infinite"
            style={styles.bannerTitle}
          >
            年货节大卖
          </Animatable.Text>
          <BannerCard item={data[1]}/>
        </View>
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
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundWrapper: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },

  contianerWrapper: {
    margin: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topContainer: {
    marginTop: 24,
  },

  bannerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
})

export default AnimateBanner;