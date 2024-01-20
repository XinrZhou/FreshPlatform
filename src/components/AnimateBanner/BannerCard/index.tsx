import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const boderColorList = ['#FF6666', '#FFB466', '#FFFF66', '#66FF66']

const BannerCard: React.JSX.Element = ({ item, index, position }) => {
  const { url, price } = item;

  return (
    !position ? 
      <View 
        style={[styles.containerWrapper, styles.topContainer]}
      >
        <Text style={[styles.slogan, styles.topSlogan]}>
          地域年味
        </Text>
        <Image
          style={styles.goodsImage}
          source={{
            height: 100,
            width: 100,
            uri: url,
          }} 
        />
        <Text style={styles.goodsTag}>{price}</Text>
      </View> :
      <View 
        style={[
          styles.containerWrapper, 
          {
            borderColor: `${boderColorList[index]}`,
            backgroundColor: `${boderColorList[index]}`,
          }
        ]}
      >
        <Image
          style={styles.goodsImage}
          source={{
            height: 80,
            width: 100,
            uri: url,
          }} 
        />
        <Text style={styles.goodsTag}>{price}</Text>
        <Text style={[styles.slogan, styles.bottomSlogan]}>
          地域年味
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  containerWrapper: {
    borderRadius: 8,
    borderWidth: 2,
  },

  topContainer: {
    padding: 4,
    borderColor: '#E6349D',
    backgroundColor: '#E80B9B'
  },

  goodsTag: {
    top: -10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -12,
    backgroundColor: '#FF4602',
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff'
  },

  slogan: {
    marginTop: 2,
    fontWeight: '800',
    textAlign: 'center',
  },

  topSlogan: {
    color: '#fff',
  },

  bottomSlogan: {
    color: '#000',
  },

  goodsImage: {
    borderRadius: 8,
  },

  goodsPrice: {
    left: 0,
    right: 0,
    bottom: 2,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
})

export default BannerCard;