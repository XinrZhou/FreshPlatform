import React, { useState, useRef, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  FlatList,
  Animated,
  Pressable 
} from "react-native";
import FeedsItem from "./Item";
import { FEED_COLUMS } from "constants";

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

const FeedsList: React.JSX.Element = ({
  data = [],
  numColumns = 1, 
  handleFeedsItemClick = () => {},
}) => {
  const listRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Pressable 
        onPress={() => handleFeedsItemClick(item)}
      >
        <FeedsItem
          key={item.id} 
          feedItem={item}
          configProps={
            numColumns == FEED_COLUMS.SINGLE ? configProps : {}
          }
          dataList={data}
        />
      </Pressable>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        style={styles.feedsContainer}
        keyExtractor={(item) => item.id}
        ref={listRef}
        data={data}
        numColumns={numColumns}
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

export default FeedsList;