import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ant-design/react-native';
import Home from "../pages/Home";
import Classification from "../pages/Classification";
import ShoppingCart from "../pages/ShoppingCart";
import UserCenterStack from './stack/userCenter';
import ShoppingCartStack from './stack/shoppingCart';

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
              <Icon name="home" color={color} size={size}  />
            )
          }}
        />
        <Tab.Screen 
          name="分类" 
          component={Classification}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Icon name="bars" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="购物车" 
          component={ShoppingCartStack} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="我的" 
          component={UserCenterStack} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size}) => (
              <Icon name="user" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
