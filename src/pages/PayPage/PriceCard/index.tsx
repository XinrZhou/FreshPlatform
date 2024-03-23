import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from "assets/fonts";
import { getTotalPrice } from "utils";
import CustomCheckBox from "components/CustomCheckBox";
import styles from "./styles";


const DetailsRow: React.FC<{ title: string; price: string }> = ({ title, price }) => (
  <View style={styles.detailsRow}>
    <Text style={styles.detailsTitle}>{title}</Text>
    <Text style={[styles.priceText, styles.priceBold]}>
      ￥{price}
    </Text>
  </View>
);

const PriceCard: React.FC = ({ selectedList = [] }) => {
  const dispatch = useDispatch();
  const [selectedDistribution, setSelectedDistribution] = useState(0);
  const { isLogin } = useSelector(state => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={[styles.title, styles.titleBold]}>金额明细</Text>
      </View>
      <View style={styles.detailsContainer}>
        <DetailsRow title="商品金额" price={getTotalPrice(selectedList)} />
        <DetailsRow title="包装费" price="1.00" />
      </View>
    </View>
  );
}

export default PriceCard;
