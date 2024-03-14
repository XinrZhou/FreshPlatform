import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'assets/fonts';
import Home from "pages/Home";
import Classification from 'pages/Classification';
import UserCenter from 'pages/UserCenter';
import ShoppingCart from 'pages/ShoppingCart';

const Tab = createBottomTabNavigator(); 

function BottomTabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#17A3D4',
      }}
    >
      <Tab.Screen 
        name="首页" 
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) => (
            <Icon name="icon-home" color={color} size={size}  />
          )
        }}
      />
      <Tab.Screen 
        name="分类" 
        component={Classification}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) => (
            <Icon name="icon-fenlei" color={color} size={size} />
          )
        }} 
      />
      <Tab.Screen 
        name="购物车" 
        component={ShoppingCart} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) => (
            <Icon name="icon-gouwuche" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="我的" 
        component={UserCenter} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) => (
            <Icon name="icon-people" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
