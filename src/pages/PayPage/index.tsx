import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "assets/fonts";
import { getTotalPrice } from "utils";
import { addOrder } from "store/slices/shoppingCartSlice";
import styles from "./styles";
import ProductCard from "./ProductCard";
import PriceCard from "./PriceCard";
import CustomCheckBox from "components/CustomCheckBox";

const ADDRESS_SPEC = {
  name: '测试',
  phone: '19912345678',
  address: '亲橙里购物中心8号'
}

const PayPage = ({ navigation, route }) => {
  const { selectedList } = route.params || [];
  const [price, setPrice] = useState(0);
  const [extParams, setExtParams] = useState({});
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);

  useEffect(() => {
    setPrice(getTotalPrice(selectedList));
  }, [selectedList]);

  const handleValueChange = (params) => setExtParams(params);

  const handleSubmitOrder = () => {
    dispatch(addOrder({
      userId: userInfo.id,
      selectedList, 
      price, 
      extParams,
      addressSpec: ADDRESS_SPEC
    }))
    .then(() => {
      navigation.navigate('PaySuccess');
    })
    .catch(error => {
      console.error("Error submitting order:", error);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <Pressable onPress={() =>navigation.goBack()}>
            <Icon name="icon-left" size={28} color="#000" style={styles.backIcon} />
          </Pressable>
          <Text style={styles.headerTitle}>确认订单</Text>
        </View>
        <View style={[styles.containerWrapper, styles.addressWrapper]}>
          <Icon name="icon-didian" size={24} />
          <View>
            <Text style={styles.addressText}>{ADDRESS_SPEC.address}</Text>
            <View style={styles.infoWrapper} >
              <Text>{ADDRESS_SPEC.name}</Text>
              <Text>{ADDRESS_SPEC.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerWrapper}>
          <ProductCard selectedList={selectedList} handleValueChange={handleValueChange} />
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
          <Text style={styles.priceText}>{(price + 1).toFixed(2)}</Text>
        </View>
        <Pressable onPress={handleSubmitOrder}>
          <Text style={styles.payBtn}>提交订单</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default PayPage;
