import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getPrice } from "utils";

const SalePrice: React.JSX.Element = ({price}) => {
  return (
    <View style={styles.priceWrapper}>
      <Text style={styles.priceDecimal}>
        ￥
      </Text>
      <Text style={styles.priceInteger}>
        {getPrice(price)?.[0]}
      </Text>
      <Text style={styles.priceDecimal}>
        .{getPrice(price)?.[1]}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  priceInteger: {
    includeFontPadding: false,
    color: '#FF5043',
    fontSize: 24,
    fontWeight: '600',
  },

  priceDecimal: {
    color: '#FF5043',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});

export default SalePrice;