import React from "react";
import { View, Text } from "react-native";
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";


const LocationSelector: React.JSX.Element = () => {
  return (
    <View style={styles.locationWrapper}>
      <Icon name="icon-didian" size={32} color="#fff"/>
      <Text style={styles.locationText}>
        亲橙里购物中心8号
      </Text>
      <Icon name="icon-down" size={32} color="#fff"/>
    </View>
  )
};

const styles = CustomStyleSheet.create({
  locationWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#fff"
  }
})

export default LocationSelector;