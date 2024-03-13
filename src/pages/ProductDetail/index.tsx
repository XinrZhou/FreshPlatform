import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView , Text, Image, Pressable } from "react-native";
import CustomStyleSheet from "/styles";
import { Icon } from "/assets/fonts";
import { getProductDetail } from "/store/slices/productSlice";
import InfoCard from "./InfoCard";
import ScaledImage from "./SacledImage";

const ProductDetail: React.JSX.Element = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const { productInfo, skuList } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductDetail(route.params.id));
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
      <View>
        <Image
          source={{
            uri: productInfo.imageUrl
          }}
          style={styles.mainImage}  
        />
      </View>
      <InfoCard productInfo={productInfo} />
      {
        productInfo.detailImageUrl && <ScaledImage uri={productInfo.detailImageUrl}/>
      }
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