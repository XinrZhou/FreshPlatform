import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from "react-native-vector-icons/AntDesign"
import { Iconfont } from '../assets/fonts';
import Home from "../pages/Home";
import Classification from "../pages/Classification";
import ShoppingCart from "../pages/ShoppingCart";
import UserCenter from "../pages/UserCenter";

const Tab = createBottomTabNavigator(); 


function BottomTabNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#f03726',
        }}
      >
        <Tab.Screen 
          name="首页" 
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Iconfont name="icon-home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="分类" 
          component={Classification}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Iconfont name="icon-fenlei" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="购物车" 
          component={ShoppingCart} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Iconfont name="icon-cart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="我的" 
          component={UserCenter} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Iconfont name="icon-people" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
