import React, { useEffect, useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView 
} from "react-native";
import { CheckBox, Avatar, Divider } from '@rneui/themed';
import LinearGradient from "react-native-linear-gradient";
import CartItem from "./Item";
import TopNav from "components/TopNav";
import FeedsItem from "components/FeedsList/Item";
import SalePrice from "components/SalePrice";
import CustomCheckBox from "components/CustomCheckBox";
import { Icon } from "assets/fonts";
import { getTotalPrice } from "utils";

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: '精品草莓',
    price: '20.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ],
    count: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: '精品车厘子',
    price: '50.99',
    saleAttribute: '限时秒杀',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ],
    count: 2,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: '精品黄瓜',
    price: '5.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ],
    count: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2222',
    name: '精品草莓',
    price: '20.99',
    saleAttribute: '年货节',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ],
    count: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa456',
    name: '精品车厘子',
    price: '50.99',
    saleAttribute: '百亿补贴',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ],
    count: 3,
  }
];


const ShoppingCart: React.JSX.Element = () => {
  const [dataList, setDataList] = useState(data)
  const [isSelectALL, setIsSelectALL] = useState(false);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  useEffect(() => {
    if (!isSelectALL && selectedList.length === data.length) {
      setIsSelectALL(true);
    } else if (isSelectALL) {
      setIsSelectALL(false);
    }
  }, [selectedList]);

  // checked/cancel checked
  const toggleSelectedAllState = () => {
    if (isSelectALL) {
      setSelectedList([]);
    } else {
      setSelectedList(current => [...new Set(
        [...data.map(item => item.id), ...current]
      )])
    }
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={[
        styles.headerContainer,
        styles.flexRowWrapper
      ]}>
        <TopNav 
          pageTitle="购物车" 
          showBackIcon={true}
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
            <Avatar
              size={60} 
              rounded
              source={{
                uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.9IFFP25NR6-Rna3JUzGMpgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
              }} 
            />
            <Text style={styles.listHeaderText}>
              Siruis生鲜{dataList[0].count}
            </Text>
            <Icon
              name="icon-right" 
              size={20}
              color={"#BFBFBF"}
            />
          </View>
          <Divider color="#F4F4F4" />
          <View style={styles.listContent}>
            {
              data.map((item, index) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    dataList={dataList}
                    setDataList={setDataList}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
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
          <SalePrice price={getTotalPrice(dataList)} />
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

const styles = StyleSheet.create({
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
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },

  rightText: {
    marginRight: 8,
    fontSize: 18,
    color: '#000',
  },
  
  cartList: {
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
  },

  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  listHeaderText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
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