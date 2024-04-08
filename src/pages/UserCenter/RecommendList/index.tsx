import React from "react";
import { View, Text } from "react-native";
import CustomStyleSheet from "styles";
import IconItem from "../IconItem";
import { Icon } from "assets/fonts";

const RecommendList: React.JSX.Element = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          为你推荐 · 
        </Text>
        <Text style={[
          styles.title,
          { color:  '#17A3D4'}
        ]}>
          RECOMMEND
        </Text>
      </View>
    </View>
  )
};

const styles = CustomStyleSheet.create({
  container: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  }
});

export default RecommendList;