import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomStyleSheet from "styles";
import LinearGradient from "react-native-linear-gradient";
import CartItem from "./Item";
import LocationSelector from "components/LocationSelector";
import SalePrice from "components/SalePrice";
import CustomCheckBox from "components/CustomCheckBox";
import { getCart, addCart } from "store/slices/shoppingCartSlice";
import { Icon } from "assets/fonts";
import { getTotalPrice } from "utils";

const ShoppingCart: React.JSX.Element = ({navigation, route}) => {
  const [isSelectALL, setIsSelectALL] = useState(false);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const dispatch = useDispatch();
  const { cartList } = useSelector(state => state.shoppingCart);
  const { isLogin } = useSelector(state => state.user);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getCart());
    }, []))

  useEffect(() => {
    if (!isLogin) {
      navigation.navigate('loginPage', {
        lastPage: '购物车'
      });
    }
  }, [isLogin])

  useEffect(() => {
    if (selectedList.length === cartList.length) {
      setIsSelectALL(true);
    } else if (isSelectALL) {
      setIsSelectALL(false);
    }
  }, [selectedList, cartList]);

  // checked/cancel checked
  const toggleSelectedAllState = () => {
    if (isSelectALL) {
      setSelectedList([]);
    } else {
      setSelectedList(current => [...new Set(
        [...cartList.map(item => item.id), ...current]
      )])
    }
  };

  // 购物车商品数量变化
  const handleNumericChange = (params) => {
    console.log('paramss===', params)
    dispatch(addCart(params));
  };  

  return (
    <View style={styles.containerWrapper}>
      <View style={[
        styles.headerContainer,
        styles.flexRowWrapper
      ]}>
        <LocationSelector
          iconProps={{fontSize: 24, color: '#000'}}
          textProps={{fontSize: 16, color: '#000'}}
        />
        <Text style={styles.rightText}>管理</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.cartList}>
          <View style={styles.listHeader}>
            <CustomCheckBox
              isChecked={isSelectALL}
              onClick={toggleSelectedAllState} 
            />
            <Image
              source={{
                uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/20240322214648%20%281%29.png'
              }}
              style={styles.logo}
            />
          </View>
          <View style={styles.listContent}>
            {
              cartList.map((item, index) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    cartList={cartList}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                    handleNumericChange={handleNumericChange}
                  />
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={[
        styles.footerContainer,
        styles.flexRowWrapper,
      ]}>
        <View style={styles.flexRowWrapper}>
          <CustomCheckBox
            isChecked={isSelectALL}
            onClick={toggleSelectedAllState} 
          />
          <Text>全选</Text>
        </View>
        <View style={styles.flexRowWrapper}>
          <Text style={styles.commonText} >
            合计:
          </Text>
          <SalePrice originPrice={getTotalPrice(selectedList, cartList)} />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#FF8F00', '#FF5100']}
            style={styles.payBtn}
          >
            <Text style={styles.btnText}>
              结算
            </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = CustomStyleSheet.create({
  containerWrapper: {
    height: '100%',
  },

  flexRowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 8,
  },

  rightText: {
    marginRight: 8,
    fontSize: 16,
    color: '#000',
  },
  
  cartList: {
    marginHorizontal: 18,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
  },

  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 24,
    marginVertical: 16,
    marginRight: 16,
  },

  listContent: {
    marginVertical: 12,
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 68,
    backgroundColor: '#fff',
  },

  commonText: {
    color: '#000'
  },

  payBtn: {
    width: 100,
    borderRadius: 24,
    marginHorizontal: 12,
    paddingVertical: 12,
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default ShoppingCart;