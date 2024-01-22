import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "../../../assets/fonts";
import { CARD_CONTENT_LIST } from "../../../constants";
import IconItem from "../IconItem";

const VipCard: React.JSX.Element = () => {

  return (
    <LinearGradient 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }}
      colors={['#D2B188', '#BC976B']} 
      style={styles.cardContainer}
    >
      <View style={styles.cardIntroduction}>
        <Text style={styles.cardTitle} >买菜卡</Text>
        <Text style={styles.cardDescription}>预计每月省105元</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.contentTitle}>享4大权益</Text>
        {
          CARD_CONTENT_LIST.map((item, index) => {
            return <IconItem key={index} {...item} color={"#000"}/>
          })
        }
      </View>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 12,
    borderRadius: 16,
  },

  cardIntroduction: {
    marginVertical: 8,
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardTitle: {
    marginRight: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardContent: {
    margin:12,
    backgroundColor: '#fff',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  contentTitle: {
    fontSize: 16,
    color: '#000',
  },
});

export default VipCard;