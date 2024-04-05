import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
  Animated,
} from "react-native";
import CustomStyleSheet from "/styles";
import { Icon } from "/assets/fonts";
import { addCart, getCart } from "store/slices/shoppingCartSlice";
import { getProductDetail } from "store/slices/productSlice";
import InfoCard from "./InfoCard";
import DetailCard from "./DetailCard";
import ServiceCard from "./ServiceCard";
import BottomFixed from "./BottomFixed";
import { Button, Badge } from "@ant-design/react-native";

const ProductDetail: React.JSX.Element = ({ navigation, route }: any) => {
  const [selectedSku, setSelectedSku] = useState<Sku>({});
  const dispatch = useDispatch();
  const { cartCount } = useSelector(state => state.shoppingCart);
  const { userInfo } = useSelector(state => state.user);
  const { productInfo, skuList } = useSelector(state => state.product);
  const { id } = route.params;

  const onSelectedSkuChange = (sku: Sku) => setSelectedSku(sku);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  // Sku默认选中
  useEffect(() => {
    setSelectedSku(productInfo);
  }, [productInfo]);

  const handleAddCart = async() => {
    await dispatch(addCart({ skuId: id, userId: userInfo.id }));
    await dispatch(getCart());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.iconWrapper}>
          <View style={styles.iconItem}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="icon-left" size={26} color="#fff" />
            </Pressable>
          </View>
          <Badge text={cartCount}>
            <View style={styles.iconItem}>
              <Icon name="icon-gouwuche" size={26} color="#fff" />
            </View>
          </Badge>
        </View>
        {/* 主图 */}
        <View>
          <Image
            source={{
              uri: selectedSku.imageUrl,
            }}
            style={styles.mainImage}
          />
        </View>
        {/* 基本信息 */}
        <InfoCard productInfo={productInfo} selectedSku={selectedSku} />
        {/* 相关服务 */}
        <ServiceCard
          skuList={skuList}
          selectedSku={selectedSku}
          onSelectedSkuChange={onSelectedSkuChange}
        />
        {/* 详细信息 */}
        <DetailCard productInfo={productInfo} />
      </ScrollView>
      {/* 底部固定 */}
      <View style={styles.bottomWrapper}>
        <View style={styles.bottomIcon}>
          <Icon name="icon-xingxing" size={24} color="#000" />
          <Text style={styles.bottomIconText}>收藏</Text>
        </View>
        <Pressable onPress={handleAddCart}>
          <Text style={styles.addCartBtn}>
            加入购物车
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = CustomStyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flex: 1
  },

  iconWrapper: {
    position: 'absolute',
    marginTop: 12,
    left: 15,
    zIndex: 100,
    width: 345,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconItem: {
    padding: 4,
    borderRadius: 28,
    backgroundColor: '#b1b1b1',
  },

  mainImage: {
    width: 375,
    height: 300,
    objectFit: 'cover',
  },

  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    color: "#fff",
    backgroundColor: "#00aefd"
  },

  bottomWrapper: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  bottomIcon: {
    alignItems: "center",
  },
  bottomIconText: {
    fontSize: 10,
  },
  addCartBtn: {
    width: 300,
    lineHeight: 28,
    height: 28,
    fontSize: 10,
    borderRadius: 28,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#00aefd"
  },
  animatedItem: {
    position: 'absolute',
    zIndex: 999, 
  },
})

export default ProductDetail;
