import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { checkToken, getInfo } from 'store/slices/userSlice';
import BottomTabNavigator from './tabs/BottomTab';
import LoginPage from 'pages/LoginPage';
import PayPage from 'pages/PayPage';
import PaySuccess from 'pages/PaySuccess';
import ProductDetail from 'pages/ProductDetail';

const Stack = createNativeStackNavigator(); 

function PageStack(): React.JSX.Element {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(checkToken())
  }, []);

  useEffect(() => {
    isLogin && dispatch(getInfo());
  }, [isLogin])

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
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          name="PayPage"
          component={PayPage}
        />
        <Stack.Screen
          name="PaySuccess"
          component={PaySuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PageStack;
