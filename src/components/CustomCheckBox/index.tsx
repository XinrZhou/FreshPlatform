import React from "react";
import { StyleSheet } from "react-native";
import CheckBox from 'react-native-check-box';
import { Icon } from "assets/fonts";


const CustomCheckBox: React.JSX.Element = ({isChecked, onClick}) => {
  return (
    <CheckBox
      style={styles.checkBox}  
      isChecked={isChecked}
      onClick={onClick}
      checkedImage={
        <Icon name="icon-icons-" size={26} color={"#FF5100"}/>
      }
      unCheckedImage={
        <Icon name="icon-yuan" size={26} color={"#BFBFBF"}/>
      }
    />
  )
};

const styles = StyleSheet.create({
  checkBox: {
    marginHorizontal: 12,
  }
})

export default CustomCheckBox;