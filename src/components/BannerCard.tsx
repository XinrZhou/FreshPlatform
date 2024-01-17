import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const BannerCard: React.JSX.Element = ({ item }) => {
  const { url, price } = item;

  return (
    <View>
      <Image
        style={styles.goodsImage}
        source={{
          height: 100,
          width: 100,
          uri: url,
        }} 
      />
      <Text style={styles.goodsPrice}>
        ￥{price}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goodsImage: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#FFEC9F',
    borderRadius: 6,
  },

  goodsPrice: {
    left: 0,
    right: 0,
    bottom: 10,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#FF9818',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    fontSize: 16,
    fontWeight: '600',
  }
})

export default BannerCard;