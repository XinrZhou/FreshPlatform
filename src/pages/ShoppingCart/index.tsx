import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, View, Image, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCart, addCart } from "store/slices/shoppingCartSlice";
import { Icon } from "assets/fonts";
import { getTotalPrice, mapSelectedList } from "utils";
import CustomStyleSheet from "styles";
import CartItem from "./Item";
import LocationSelector from "components/LocationSelector";
import SalePrice from "components/SalePrice";
import CustomCheckBox from "components/CustomCheckBox";
import EmptyCard from "components/EmptyCard";

const ShoppingCart = ({navigation, route}) => {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const dispatch = useDispatch();
  const { cartList } = useSelector(state => state.shoppingCart);
  const { isLogin } = useSelector(state => state.user);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getCart());
    }, []))

  useEffect(() => {
    if (!isLogin) {
      navigation.navigate('LoginPage', {
        lastPage: '购物车'
      });
    }
  }, [isLogin])

  useEffect(() => {
    selectedList.length && setIsSelectAll(selectedList.length === cartList.length);
  }, [selectedList, cartList]);

  const handleSelectedChange = (id) => {
    if (selectedList.includes(id)) {
      setSelectedList(current => current.filter(item => item !== id));
    } else {
      setSelectedList(current => [...current, id]);
    }
  };

  // checked/cancel checked
  const toggleSelectedAllState = () => {
    const allItemIds = cartList.map(item => item.id);
    setSelectedList(isSelectAll ? [] : allItemIds);
  };


  // 购物车商品数量变化
  const handleNumericChange = async(params) => {
    try {
      await dispatch(addCart(params));
      dispatch(getCart());
    } catch (error) {
      console.error('Error while adding item to cart:', error);
    }
  };  

  const goPayPage = () => {
    setSelectedList([]);
    navigation.navigate('PayPage', {
      selectedList: mapSelectedList(selectedList, cartList),
    });
  }

  return (
    <View style={styles.containerWrapper}>
      <View style={[
        styles.headerContainer,
        styles.flexRowWrapper
      ]}>
        <LocationSelector
          iconProps={{fontSize: 24, color: '#000'}}
          textProps={{fontSize: 16, fontWeight: '600', color: '#000'}}
        />
        <Text style={styles.rightText}>管理</Text>
      </View>
      <SafeAreaView>
        {
          cartList.length > 0 ?
            <ScrollView style={styles.cartList}>
              <View style={styles.listHeader}>
                <CustomCheckBox
                  isChecked={isSelectAll}
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
                        handleSelectedChange={handleSelectedChange}
                        handleNumericChange={handleNumericChange}
                      />
                    )
                  })
                }
              </View>
            </ScrollView> :
            <EmptyCard
              iconName='icon-konggouwuche'
              title='购物车为空'
              tips='空即是饿，饿即是空' 
            />
        }
    
      </SafeAreaView>
      <View style={[
        styles.footerContainer,
        styles.flexRowWrapper,
      ]}>
        <View style={styles.flexRowWrapper}>
          <CustomCheckBox
            isChecked={isSelectAll}
            onClick={toggleSelectedAllState} 
          />
          <Text style={styles.selectAll}>全选</Text>
        </View>
        <View style={styles.flexRowWrapper}>
          <Text style={styles.commonText} >
            合计:
          </Text>
          <SalePrice originPrice={getTotalPrice(mapSelectedList(selectedList, cartList))} />
          <Pressable onPress={selectedList.length > 0 ? goPayPage : null}>
            <View style={[
              styles.payBtn, 
              !selectedList.length && styles.disabledBtn 
            ]}>
              <Text style={styles.btnText}>
                结算
              </Text>
            </View>
          </Pressable>
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
    fontSize: 12,
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
    flex: 1
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
  },

  selectAll: {
    color: '#000',
    fontSize: 12,
  },

  commonText: {
    color: '#000'
  },

  payBtn: {
    width: 100,
    marginHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: '#23a2ff',
  },

  disabledBtn: {
    backgroundColor: '#dcdcdc',
  },

  btnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default ShoppingCart;