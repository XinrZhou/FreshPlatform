import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from "../../components/SearchBar";
import BannerCard from "../../components/BannerCard";
import GoodsFeeds from "../../components/GoodsFeeds";
import { Icon } from "../../assets/fonts";


const Home: React.JSX.Element = () => {
  const [data, setData] = useState([
    { id: 1, name: '推荐', url: "https://th.bing.com/th/id/OIP.laihirSzYwAEHE4NPX_EfwHaE8?rs=1&pid=ImgDetMain", price: 15.5 },
    { id: 2, name: '蔬菜', url: "https://th.bing.com/th/id/OIP.bstf-HJs-456v538Q2LOzAHaHa?rs=1&pid=ImgDetMain", price: 30 },
    { id: 3, name: '肉蛋', url: "https://th.bing.com/th/id/OIP.gwl6hSA6Z0zOWr0sKpwIDwHaHa?rs=1&pid=ImgDetMain", price: 1.99 },
    { id: 4, name: '水果', url: "https://th.bing.com/th/id/OIP.eqrTC1DowWkUJAq0KJCMHwHaEl?rs=1&pid=ImgDetMain", price: 9.9 },
  ]);

  const Tab = createMaterialTopTabNavigator();

  return (
    <View>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.leftArea}>
            <Icon 
              name="icon-left"
              size={24}
              color={'#fff'}
            />
            <Text style={styles.leftText}>
              Siruis生鲜
            </Text>
          </View>
          <View style={styles.rightArea}>
            <Text style={styles.rightText}>
            自提点：天猫超市
            </Text>
            <Icon 
              name="icon-right"
              size={16}
              color={'#fff'}
            />
          </View>
        </View>
        <SearchBar />
      </View>
      <Image
          style={styles.headerBackground} 
          source={{
            height: 100,
            width: 750,
            uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.Ix2oOx8x9J1aLDeAQXatpQHaED?rs=1&pid=ImgDetMain'
          }}
        />
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={{
            uri: 'https://th.bing.com/th/id/OIP.PJ2Nx9jJzw6AD-T4qQJTjwHaKX?rs=1&pid=ImgDetMain'
          }}
        >
          <Text style={styles.bannerTitle}>
            年货节狂欢购
          </Text>
          <View style={styles.bannerContent}> 
            {
              data.map((item) => {
                return <BannerCard key={item.id} item={item} />
              })
            }
          </View>
        </ImageBackground>
      </View>
      <View style={styles.feedsContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 10, 
    paddingRight: 10,
  },

  leftArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },

  rightArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightText: {
    color: '#fff',
    fontSize: 16,
  },

  headerBackground: {
    zIndex: -1,
    position: 'absolute',
    height: 160,
  },

  bannerContainer: {
    height: 160,
    marginTop: 10,
    marginLeft:8,
    marginRight: 8,
  },

  bannerTitle: {
    paddingTop: 6,
    textAlign: 'center',
    color: '#FF3043',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  bannerContent: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home;