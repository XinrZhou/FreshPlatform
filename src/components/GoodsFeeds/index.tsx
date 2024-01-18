import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import FeedsItem from "./FeedsItem";

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: '精品草莓',
    price: '20.99',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: '精品车厘子',
    price: '50.99',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: '精品黄瓜',
    price: '5.99',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
];

const GoodsFeeds: React.JSX.Element = () => {
  const renderItem = ({ item }: { item: any }) => (
    <FeedsItem item={item} /> 
  )

  return (
    <SafeAreaView>
      <FlatList
        style={styles.feedsContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  feedsContainer: {
    margin: 8,
  }
})

export default GoodsFeeds;