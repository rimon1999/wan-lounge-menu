// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelection from '../../components/HomePage/LanguageSelection';
import CategorySelection from '../../components/CategorySelection/CategorySelection';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="LanguageSelection">
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
