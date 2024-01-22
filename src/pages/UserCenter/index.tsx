import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  ScrollView,
  Image 
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopNav from "components/TopNav";
import SelfPickUpPoint from "components/SelfPickUpPoint";
import VipCard from "./VipCard";
import IconItem from "./IconItem";
import { USER_OPERATION_LIST, PLATFORM_OPERATION_LIST } from "constants";


const OperationContainer = ({operationList}) => {
  return (
    <View style={styles.operationContainer}>
      {
        operationList?.map((item, index) => {
          return <IconItem key={index} {...item} color={"#000"} />
        })
      }
    </View>
  )
}

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
          <Text style={styles.rightText}>规则</Text>
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
      <OperationContainer operationList={USER_OPERATION_LIST} />
      <OperationContainer operationList={PLATFORM_OPERATION_LIST} />

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 16,
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },

  operationContainer: {
    marginTop: 12,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 16,
  }
})

export default UserCenter;