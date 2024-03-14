import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView , Text, Image, Pressable } from "react-native";
import CustomStyleSheet from "/styles";
import { Icon } from "/assets/fonts";
import { getProductDetail, getSkuList } from "/store/slices/productSlice";
import InfoCard from "./InfoCard";
import DetailCard from "./DetailCard";
import ServiceCard from "./ServiceCard";

const ProductDetail: React.JSX.Element = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const { productInfo, skuList } = useSelector(state => state.product);

  useEffect(() => {
    const id = route.params.id;
    dispatch(getProductDetail(id));
    dispatch(getSkuList(id));
  }, [])

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
    >
      <View style={styles.iconWrapper}>
        <View style={styles.iconItem}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="icon-left" size={28} color="#fff"/>
          </Pressable>
        </View>
        <View style={styles.iconItem}>
          <Icon name="icon-gouwuche" size={28} color="#fff"/>
        </View>
      </View>
      {/* 主图 */}
      <View>
        <Image
          source={{
            uri: productInfo.imageUrl
          }}
          style={styles.mainImage}  
        />
      </View>
      {/* 基本信息 */}
      <InfoCard productInfo={productInfo} />
      {/* 相关服务 */}
      <ServiceCard skuList={skuList} />
      {/* 详细信息 */}
      <DetailCard productInfo={productInfo} />
    </ScrollView>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },

  iconWrapper: {
    position: 'absolute',
    marginTop: 10,
    left: 15,
    zIndex: 100,
    width: 345,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconItem: {
    padding: 8,
    borderRadius: 28,
    backgroundColor: '#b1b1b1'
  },

  mainImage: {
    width: 375,
    height: 300,
    objectFit: 'cover',
  }
})

export default ProductDetail;