import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { Icon } from "@ant-design/react-native";


const TopNav: React.JSX.Element = ({
  pageTitle,
  showBackIcon = true,
  themeColor
}) => {
  return (
    <View style={styles.containerWrapper}>
      {
        showBackIcon && (
          <Icon name="left" size={24} color={"#000"}/>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  containerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  contianerText: {
    color: "#000",
    fontSize: 24,
    fontWeight: '500',
  }
})

export default TopNav;