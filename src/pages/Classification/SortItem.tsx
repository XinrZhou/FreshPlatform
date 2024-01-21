import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "../../assets/fonts";

const SortItem: React.JSX.Element = ({
  name,
  attribute,
}: {
  name: string,
  attribute: string, 
}) => {
  return (
    <View style={styles.itemWrapper}>
      <Text>{name}</Text>
      <View style={styles.iconWrapper}>
        <Icon 
          name="icon-top" 
          size={18} 
        />
        <Icon 
          name="icon-down" 
          size={18} 
        />
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
    marginTop: -4,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default SortItem;