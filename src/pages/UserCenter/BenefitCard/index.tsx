import React from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomStyleSheet from "styles";
import IconItem from "../IconItem";
import { Icon } from "assets/fonts";
import { CARD_CONTENT_LIST } from "constants";

const CardItem = ({title, description}) => {
  return (
    <View style={styles.cardItem}>
      <Text style={styles.cardTitle}> {title} </Text>
      <Text style={styles.cardDescription}> {description} </Text>
    </View>
  )
}

const BenefitCard: React.JSX.Element = () => {

  return (
    <View style={styles.cardContainer}>
      <View >
        <CardItem title="0张" description="红包卡券" />
      </View>
      <View >
        <CardItem title="0元" description="购物卡" />
      </View>
      <View >
        <CardItem title="开通省40元" description="省钱卡" />
      </View>
    </View>
  )
};

const styles = CustomStyleSheet.create({
  cardContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(218, 240, 254, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardItem: {
    marginVertical: 12,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#000',
    fontSize: 14,
  },
  cardDescription: {
    marginTop: 2,
    color: '#b6b6b6',
    fontSize: 10,
  }
});

export default BenefitCard;