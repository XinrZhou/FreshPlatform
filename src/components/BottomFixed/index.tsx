import React from "react";
import CustomStyleSheet from "styles";
import CheckBox from 'react-native-check-box';
import { Icon } from "assets/fonts";
import { Drawer } from "@ant-design/react-native";
import { View, Text, Pressable } from "react-native";

const BottomFixed: React.JSX.Element = ({isChecked, onClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="icon-xingxing" size={24} color="#000" />
        <Text style={styles.iconText}>收藏</Text>
      </View>
      <Pressable>
        <Text style={styles.buttonWrapper} >
          加入购物车
        </Text>
      </Pressable>
    </View>
  )
};

const styles = CustomStyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  iconWrapper: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 10,
  },
  buttonWrapper: {
    width: 300,
    lineHeight: 28,
    height: 28,
    fontSize: 10,
    borderRadius: 28,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#00aefd"
  }
})

export default BottomFixed;