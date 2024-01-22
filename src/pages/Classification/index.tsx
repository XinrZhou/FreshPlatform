import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "components/SearchBar";
import TopNav from "components/TopNav";
import ScrollNavBar from "components/ScrollNavBar";
import FeedsList from "components/FeedsList";
import NavItem from "./NavItem";

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: '精品草莓',
    price: '20.99',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: '精品车厘子',
    price: '50.99',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: '精品黄瓜',
    price: '5.99',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2222',
    name: '精品草莓',
    price: '20.99',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa456',
    name: '精品车厘子',
    price: '50.99',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e246456',
    name: '精品黄瓜',
    price: '5.99',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbfdsf',
    name: '精品草莓',
    price: '20.99',
    image: 'https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aavgrtg',
    name: '精品车厘子',
    price: '50.99',
    image: 'https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购",
      "年终大促"
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dooo',
    name: '精品黄瓜',
    price: '5.99',
    image: 'https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain',
    tags: [
      "年货超值购"
    ]
  },
];

const Classification: React.JSX.Element = () => {
  const [navList, setNavList] = useState([
    { id: 1, name: '推荐', url: "https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain", price: '9.9秒杀' },
    { id: 2, name: '蔬菜', url: "https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain", price: '9.9秒杀' },
    { id: 3, name: '肉蛋', url: "https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain", price: '9.9秒杀' },
    { id: 4, name: '水果', url: "https://th.bing.com/th/id/OIP.eqrTC1DowWkUJAq0KJCMHwHaEl?rs=1&pid=ImgDetMain", price: '满199减30' },
  ])
  const [colNavList, setColNavList] = useState([
    "全部商品", "叶菜", "土豆根茎", "菌菇", "调味蔬菜"
  ]); 
  const [colNavActiveIndex, setColNavActiveIndex] = useState(0);

  return (
    <View>
      <LinearGradient
        colors={['#FBEDBF', '#FEF3F1']} 
      >
        <View style={styles.headerContainer}>
          <TopNav 
            pageTitle="分类" 
            showBackIcon={true}
          />
          <SearchBar />
        </View>
        <ScrollNavBar navList={navList}/>
      </LinearGradient>
      <View style={styles.feedsContainer}>
        <View style={styles.feedsColNav}>
          {
            colNavList.map((item, index) => {
              return (
                <Text 
                  key={index}
                  style={[
                    styles.colNavItem,
                    index === colNavActiveIndex && (
                      styles.colNavActiveItem
                    ),
                    index === 0 && {borderTopLeftRadius: 24}
                  ]} 
                  onPress={() => setColNavActiveIndex(index)}
                >
                  {item}
                </Text>
              )
            })
          }
        </View>
        <View style={styles.feedsWrapper}>
          <View style={styles.sortNav}>
            <Text style={styles.leftArea}>全部商品</Text>
            <View style={styles.rightArea}>
              <NavItem
                name="销量"
                attribute="saleCount"
              />
              <NavItem 
                name="价格"
                attribute="price"
              />
            </View>
          </View>
          <FeedsList data={data} numColumns={1}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 12,
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  feedsContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  feedsColNav: {
    width: 120,
    borderTopLeftRadius: 24,
    backgroundColor: '#F5F5F5',
  },

  colNavItem: {
    top: 'auto',
    bottom: 'auto',
    height: 56,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000',
  },

  colNavActiveItem: {
    backgroundColor: '#fff',
    color: '#FF5043',
    fontWeight: 'bold'
  },

  colNavItem: {
    top: 'auto',
    bottom: 'auto',
    height: 56,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000',
  },

  feedsWrapper: {
    flex: 1,
  },

  sortNav: {
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftArea: {
    flex: 1,
    marginLeft: 12,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  rightArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})

export default Classification;