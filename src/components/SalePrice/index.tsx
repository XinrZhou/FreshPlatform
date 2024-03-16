import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getPrice } from "utils";

const SalePrice: React.JSX.Element = ({
  originPrice = 0, 
  discountPrice = 0,
  unit = '',
  styleProps = {},
}) => {
  const price = discountPrice || originPrice;
  return (
    <View style={[styles.priceWrapper, styleProps]}>
      <Text style={styles.priceDecimal}>
        ￥
      </Text>
      <Text style={styles.priceInteger}>
        {getPrice(price)?.[0]}
      </Text>
      {
        getPrice(price)?.[1] &&
        <Text style={styles.priceInteger}>
          .{getPrice(price)?.[1]}
        </Text>
      }
      <Text style={styles.unit}>
        /{unit}
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
    color: '#ff502f',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 30,
  },

  priceDecimal: {
    color: '#ff502f',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
  },

  unit: {
    marginLeft: 6,
    lineHeight: 30,
  }
});

export default SalePrice;