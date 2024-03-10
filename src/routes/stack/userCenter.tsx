import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PAGE_TYPE } from '../constant';
import UserCenter from "pages/UserCenter";
import LoginPage from "pages/LoginPage";

const Stack = createNativeStackNavigator(); 

function UserCenterStack(): React.JSX.Element {
  const { isLogin } = useSelector(state => {
    return {
      isLogin: state.user.isLogin
    }
  })

  return (
    <Stack.Navigator
      initialRouteName={isLogin ? PAGE_TYPE.USER_CENTER : PAGE_TYPE.LOGIN}
      screenOptions={{
        headerShown: false, // 隐藏Stack导航栏
      }}
    >
      <Stack.Screen 
        name={PAGE_TYPE.LOGIN}
        component={LoginPage}
        initialParams={{
          nextPage: PAGE_TYPE.USER_CENTER,
        }}
      />
      <Stack.Screen 
        name={PAGE_TYPE.USER_CENTER} 
        component={UserCenter} 
      />
    </Stack.Navigator>
  );
}

export default UserCenterStack;
