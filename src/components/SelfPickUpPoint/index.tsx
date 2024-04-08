import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "assets/fonts";


const SelfPickUpPoint: React.JSX.Element = ({ themeColor = '#fff' }) => {
  return (
    <View style={styles.containerWrapper}>
      <Text style={{
        fontSize: 16,
        color: themeColor
      }}>
        地址：亲橙里购物中心
      </Text>
      <Icon 
        name="icon-right"
        size={16}
        color={themeColor}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  containerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default SelfPickUpPoint;