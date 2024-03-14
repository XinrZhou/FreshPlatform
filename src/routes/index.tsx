import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './tabs/BottomTab';
import LoginPage from 'pages/LoginPage';
import ProductDetail from 'pages/ProductDetail';

const Stack = createNativeStackNavigator(); 

function PageStack(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name="bottom"
          component={BottomTabNavigator}
        />
        <Stack.Screen 
          name="ProductDetail"
          component={ProductDetail} 
        />
        <Stack.Screen
          name="loginPage"
          component={LoginPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PageStack;
