import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '../assets/fonts';
import Home from "../pages/Home";
import ClassificationStack from './stack/classification';
import UserCenterStack from './stack/userCenter';
import ShoppingCartStack from './stack/shoppingCart';

const Tab = createBottomTabNavigator(); 

function BottomTabNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
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
          component={ClassificationStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Icon name="icon-fenlei" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="购物车" 
          component={ShoppingCartStack} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Icon name="icon-gouwuche" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="我的" 
          component={UserCenterStack} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Icon name="icon-people" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
