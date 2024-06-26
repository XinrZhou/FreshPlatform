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
import WaterfallFlow from 'react-native-waterfall-flow';

// '1x1'商卡配置
const configProps = {
  imageProps: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  containerProps: {
    flexDirection: "row",
    width: '100%',
    marginHorizontal: 0,
  },
  contentProps: {
    paddingVertical: 0,
    paddingHorizontal: 12,
  }
}

const FeedsList: React.JSX.Element = ({
  data = [],
  numColumns = 1, 
  handleAddCart = () => {},
  handleFeedsItemClick = () => {},
  headerComponents,
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
          handleAddCart={handleAddCart}
        />
      </Pressable>
    )
  }

  return (
    <SafeAreaView>
      {
        numColumns == FEED_COLUMS.SINGLE ?
          <FlatList
            ListHeaderComponent={headerComponents}
            style={styles.feedsContainer}
            keyExtractor={(item) => item.id}
            key={(item) => item.id}
            ref={listRef}
            data={data}
            numColumns={numColumns}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          /> :
          <WaterfallFlow
            ListHeaderComponent={headerComponents}
            style={styles.feedsContainer}
            keyExtractor={(item) => item.id}
            key={(item) => item.id}
            ref={listRef}
            data={data}
            numColumns={numColumns}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
      }
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  feedsContainer: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    zIndex: -1
  }
})

export default FeedsList;