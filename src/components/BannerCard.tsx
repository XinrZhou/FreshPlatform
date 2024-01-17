import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const BannerCard: React.JSX.Element = ({ item }) => {
  const { url, price } = item;

  return (
    <View>
      <Image
        style={styles.goodsImage}
        source={{
          height: 120,
          width: 100,
          uri: url,
        }} 
      />
      <Text style={styles.goodsPrice}>
        ￥{item.price}
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
    position: 'absolute', 
    marginLeft: 0,
    marginRight: 0,
    left: 0, 
    right: 0,
    bottom: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }

})

export default BannerCard;