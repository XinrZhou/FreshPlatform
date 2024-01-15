import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Classification from "../pages/Classification";
import ShoppingCart from "../pages/ShoppingCart";
import UserCenter from "../pages/UserCenter";

const Tab = createBottomTabNavigator(); 


function BottomTabNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="首页" 
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="分类" 
          component={Classification}
          options={{
            headerShown: false,
          }} 
        />
        <Tab.Screen 
          name="购物车" 
          component={ShoppingCart} 
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="我的" 
          component={UserCenter} 
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
