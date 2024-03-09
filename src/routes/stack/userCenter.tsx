import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserCenter from "pages/UserCenter";
import LoginPage from "pages/LoginPage";

const Stack = createNativeStackNavigator(); 

function UserCenterStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // 隐藏Stack导航栏
      }}
    >
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="UserCenter" component={UserCenter} />
    </Stack.Navigator>
  );
}

export default UserCenterStack;
