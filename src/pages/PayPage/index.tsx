import React from "react";
import { View, Text, Image, Pressable, SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "assets/fonts";
import styles from "./styles";
import ProductCard from "./ProductCard";
import PriceCard from "./PriceCard";
import CustomCheckBox from "components/CustomCheckBox";
import { getTotalPrice } from "../../utils";

const PayPage = ({ navigation, route }: any) => {
  const { selectedList } = route.params || {};
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="icon-left" size={28} color="#000" style={styles.backIcon} />
          </Pressable>
          <Text style={styles.headerTitle}>确认订单</Text>
        </View>
        <View style={[styles.containerWrapper, styles.addressWrapper]}>
          <Icon name="icon-didian" size={24} />
          <View>
            <Text style={styles.addressText}>亲橙里购物中心8号</Text>
            <View style={styles.infoWrapper} >
              <Text>测试</Text>
              <Text>19912345678</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerWrapper}>
          <ProductCard selectedList={selectedList} />
        </View>
        <View style={styles.containerWrapper}>
          <PriceCard selectedList={selectedList} />
        </View>
        <View style={[styles.containerWrapper, styles.payWrapper]}>
          <View style={styles.iconWrapper}>
            <Icon name="icon-zhifubao" size={24} color="#1477ff"/>
            <Text style={styles.iconText}>支付宝</Text>
          </View>
          <CustomCheckBox isChecked={true}/>
        </View>
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <Text style={styles.bottomText}>共{selectedList.length}件</Text>
        <Text style={styles.bottomText}>合计:</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceCurrency}>￥</Text>
          <Text style={styles.priceText}>{(getTotalPrice(selectedList) + 1).toFixed(2)}</Text>
        </View>
        <Pressable onPress={() => console.log('test....')}>
          <Text style={styles.payBtn}>提交订单</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default PayPage;
