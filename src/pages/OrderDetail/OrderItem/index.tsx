import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { TAB_BUTTON } from "constants";
import CustomStyleSheet from "styles";

const ACTIVE_TEXT = '再来一单';

const OrderItem = ({ orderItem }) => {
  const { type, imageList=[], count, price, description, createTime } = orderItem;

  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.flexRow, styles.cardHeader]}>
        <Image
          source={{
            uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/20240322214648%20%281%29.png'
          }}
          style={styles.logo}
        />
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={[
        styles.cardContent, 
        styles.flexRow
      ]}>
        <View style={styles.imageWrapper}>
          {
            imageList.map((item, index) => {
              return (
                <Image
                  source={{
                    uri: item
                  }}
                  style={styles.cardImage}
                />
              )
            })
          }
        </View>
        <View style={styles.specificWapper}>
          <Text style={styles.price}>
            ￥{price}
          </Text>
          <Text style={styles.count}>
            共{count}件
          </Text>
        </View>
      </View>
      <Text>下单时间 : {createTime}</Text>
      <View style={styles.cardOperation}>
        {
          TAB_BUTTON.map((item, index) => {
            if (item.value === type) {
              return item.buttonList.map((btnText, btnIndex) => (
                <Pressable 
                  style={[
                    styles.operationBtn,
                    btnText === ACTIVE_TEXT && styles.activeOperationBtn
                  ]} 
                  key={btnIndex}
                >
                  <Text style={[
                    styles.btnText,
                    btnText === ACTIVE_TEXT && styles.activeBtnText
                  ]}>
                    {btnText}
                  </Text>
                </Pressable>
              ));
            }
            return null;
          })
        }
      </View>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 86,
    height: 16,
  },
  description: {
    color: '#000'
  },
  imageWrapper: {
    marginVertical: 12,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    gap: 10,
  },
  cardImage: {
    width: 66,
    height: 66,
    borderRadius: 8,
  },
  specificWapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  cardOperation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  operationBtn: {
    paddingVertical: 8,
    width: 68,
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
  },
  activeOperationBtn: {
    borderColor: '#1eade8'
  },
  activeBtnText: {
    color: '#1eade8'
  },
})

export default OrderItem;
