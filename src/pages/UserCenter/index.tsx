import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  ScrollView 
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "../../components/SearchBar";
import TopNav from "../../components/TopNav";
import ScrollNavBar from "../../components/ScrollNavBar";
import GoodsFeeds from "../../components/GoodsFeeds";
import SortItem from "./SortItem";
import { Image } from "react-native-animatable";
import SelfPickUpPoint from "../../components/SelfPickUpPoint";
import VipCard from "./VipCard";


const UserCenter: React.JSX.Element = () => {

  return (
    <View style={styles.containerWrapper}>
      <LinearGradient
        colors={['#FBEDBF', '#FEF3F1']} 
      >
        <View style={styles.headerContainer}>
          <TopNav 
            pageTitle="" 
            showBackIcon={true}
          />
          <View style={styles.rightWrapper}>
            <Text style={styles.rightText}>规则</Text>
            <Text style={styles.rightText}>设置</Text>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <Image
            width={68}
            height={68}
            source={{
              uri: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.9IFFP25NR6-Rna3JUzGMpgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
            }}
            style={styles.avatar}
          />
          <View style={styles.detailInfoWrapper}>
            <Text style={styles.nickName}>香菜</Text>
            <SelfPickUpPoint themeColor="#959595"/>
          </View>
        </View>
      </LinearGradient>
      <VipCard />
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
    justifyContent: 'space-between',
  },

  rightWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  rightText: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },

  userInfoContainer: {
    margin: 12,
    display: 'flex',
    flexDirection: 'row',
  },

  detailInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  avatar: {
    borderRadius: 34,
    marginRight: 12,
  },

  nickName: {
    fontSize: 18,
    color: '#000',
  }
})

export default UserCenter;