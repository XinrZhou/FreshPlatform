import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@ant-design/react-native";

const NavItem: React.JSX.Element = ({ name, attribute }: {
  name: string,
  attribute: string, 
}) => {
  return (
    <View style={styles.itemWrapper}>
      <Text>{name}</Text>
      <View style={styles.iconWrapper}>
        <Icon name="up" size={10} />
        <Icon name="down" size={10} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  iconWrapper: {
    height: 12,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default NavItem;