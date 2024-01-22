import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from '../../../assets/fonts'

const IconItem: React.JSX.Element = ({title, iconName, color}) => {
  return (
    <View style={styles.itemWrapper}>
      <Icon 
        size={40} 
        color={color}
        // color={'#8D4200'}
        name={iconName}
      />
      <Text style={styles.itemTitle}>
        {title}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  itemWrapper: {
    marginVertical: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemTitle: {
    marginTop: 2,
    textAlign: 'center',
    fontWeight: '500',
    color: '#000',
  }
});

export default IconItem;