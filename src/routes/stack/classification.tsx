import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Classification from '/pages/Classification';
import ProductDetail from '/pages/ProductDetail';

const Stack = createNativeStackNavigator(); 

function ClassificationStack(): React.JSX.Element {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
     <Stack.Screen 
        name="Classification"
        component={Classification}
      />
      <Stack.Screen 
        name="ProductDetail"
        component={ProductDetail} 
      />
    </Stack.Navigator>
  );
}

export default ClassificationStack;
