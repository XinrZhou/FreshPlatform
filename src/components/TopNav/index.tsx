import React from "react";
import { 
  View, 
  Text,
  StyleSheet
} from "react-native";
import { Icon } from "../../assets/fonts";

const TopNav: React.JSX.Element = ({
  pageTitle,
  showBackIcon = true,
  themeColor
}) => {
  return (
    <View style={styles.leftArea}>
      {
        showBackIcon && (
          <Icon name="icon-left" size={28} color={"#000"}/>
        )
      }
      <Text style={[
        styles.leftText,
        themeColor && {color: themeColor}
      ]}>
        {pageTitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  leftArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftText: {
    color: "#000",
    fontSize: 24,
    fontWeight: '500',
  }
})

export default TopNav;