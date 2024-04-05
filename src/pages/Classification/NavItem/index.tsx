import React from "react";
import { View, Text } from "react-native";
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";

const NavItem: React.JSX.Element = ({ name, attribute}: {
  name: string,
  attribute: string, 
}) => {
  return (
    <View style={styles.itemWrapper}>
      <Text>{name}</Text>
      <View style={styles.iconWrapper}>
        <Icon name="icon-top" size={16} />
        <Icon name="icon-down" size={16} />
      </View>
    </View>
  )
};

const styles = CustomStyleSheet.create({
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  iconWrapper: {
    height: 8,
    marginTop: -4,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default NavItem;