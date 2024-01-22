import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  FlatList,
  Animated 
} from "react-native";
import FeedsItem from "./FeedsItem";
import FeedsRowItem from "./FeedsRowItem";
import { FEED_COLUMS } from "../../constants";

// '1x1'商卡配置
const configProps = {
  imageProps: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  containerProps: {
    flexDirection: "row",
  },
  contentProps: {
    paddingVertical: 0,
    paddingHorizontal: 12,
  }
}

const GoodsFeeds: React.JSX.Element = (props={}) => {
  const listRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <FeedsItem
        key={item.id} 
        feedItem={item}
        configProps={
          props.numColumns ==FEED_COLUMS.SINGLE ? 
          configProps : {}
        }
      />
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        style={styles.feedsContainer}
        keyExtractor={(item) => item.id}
        ref={listRef}
        {...props}
        renderItem={renderItem}
      />
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  feedsContainer: {
    marginTop: 16,
    marginLeft: 12,
    marginRight: 12,
  }
})

export default GoodsFeeds;