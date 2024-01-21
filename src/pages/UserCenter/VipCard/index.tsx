import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "../../../assets/fonts";
import { CARD_CONTENT_LIST } from "../../../constants";

const ContentItem = ({title, iconName, color}) => {
  return (
    <View style={styles.itemWrapper}>
      <Icon 
        size={40} 
        color={'#8D4200'}
        name={iconName}
      />
      <Text style={styles.itemTitle}>
        {title}
      </Text>
    </View>
  )
}

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
            return <ContentItem key={index} {...item} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
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
    fontWeight: 'bold',
  },

  itemWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemTitle: {
    textAlign: 'center',
    color: '#8D4200'
  }
});

export default VipCard;