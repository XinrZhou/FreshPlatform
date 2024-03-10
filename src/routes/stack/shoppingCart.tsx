import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PAGE_TYPE } from '../constant';
import ShoppingCart from 'pages/ShoppingCart';
import LoginPage from "pages/LoginPage";

const Stack = createNativeStackNavigator(); 

function ShoppingCartStack(): React.JSX.Element {
  const { isLogin } = useSelector(state => {
    return {
      isLogin: state.user.isLogin
    }
  })

  return (
    <Stack.Navigator
      initialRouteName={isLogin ? PAGE_TYPE.SHOPPING_CART : PAGE_TYPE.LOGIN}
      screenOptions={{
        headerShown: false, // 隐藏Stack导航栏
      }}
    >
     <Stack.Screen 
        name={PAGE_TYPE.LOGIN}
        component={LoginPage}
        initialParams={{
          nextPage: PAGE_TYPE.SHOPPING_CART,
        }}
      />
      <Stack.Screen 
        name={PAGE_TYPE.SHOPPING_CART} 
        component={ShoppingCart} 
      />
    </Stack.Navigator>
  );
}

export default ShoppingCartStack;
