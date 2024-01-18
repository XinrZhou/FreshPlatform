import React from "react";
import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import { getPrice } from "../../../utils";

const FeedsItem: React.JSX.Element = (props: object) => {
  const { name, price, image, tags } = props?.item;

  const onPress = () => console.log('press...')

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.itemImage}
        source={{ 
          height: 160,
          width: 160,
          uri: image 
        }}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>
          {name}
        </Text>
        <View style={styles.tagWapper}>
          {
            tags.map(item => {
              return (
                <Text style={styles.itemTag}>
                  {item}
                </Text>
              )
            })
          }
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.itemPrice}>
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
          <Pressable style={styles.addCartBtn} onPress={onPress}>
            <Text style={styles.btnText}>加入购物车</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 12,
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
  },

  itemImage: {
    borderRadius: 4,
    marginRight: 12,
  },

  itemContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },

  tagWapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  itemTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },

  itemTag: {
    marginRight: 4,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 2,
    backgroundColor: '#FCF0B2',
  },

  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  priceInteger: {
    includeFontPadding: false,
    bottom: -2,
    color: '#FF5043',
    fontSize: 24,
    fontWeight: '600',
  },

  priceDecimal: {
    includeFontPadding: false,
    color: '#FF5043',
    fontSize: 16,
    fontWeight: '600',
  },

  addCartBtn: {
    right: 6,
    height: 36,
    borderRadius: 36,
    backgroundColor: '#FF5043',
  },

  btnText: {
    margin: 6,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
})

export default FeedsItem;