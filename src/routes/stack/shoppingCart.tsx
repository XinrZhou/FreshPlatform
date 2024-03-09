import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from 'pages/ShoppingCart';
import LoginPage from "pages/LoginPage";

const Stack = createNativeStackNavigator(); 

function ShoppingCartStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // 隐藏Stack导航栏
      }}
    >
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="shoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}

export default ShoppingCartStack;
