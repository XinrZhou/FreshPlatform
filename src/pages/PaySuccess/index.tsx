import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { Icon } from "assets/fonts";
import CustomStyleSheet from "styles";


const PaySuccess = ({ navigation, route }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Pressable onPress={() => navigation.popToTop()}>
          <Icon name="icon-left" size={28} color="#000" style={styles.backIcon} />
        </Pressable>
        <Text style={styles.headerTitle}>支付成功</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Icon name="icon-dagou" size={100} color="#23a2ff" />
        <Text>您的包裹正在准备中...</Text>
      </View>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  headerWrapper: { 
    marginTop: 12,
    flexDirection: 'row',  
    alignItems: 'center' 
  },

  headerTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  
  contentWrapper: {
    margin: 16,
    paddingVertical: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  }
})

export default PaySuccess;
