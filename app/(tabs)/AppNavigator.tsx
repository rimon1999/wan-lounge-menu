import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelection from '../../components/HomePage/LanguageSelection';
import CategorySelection from '../../components/CategorySelection/CategorySelection';
import HookahMenu from '../../components/MenuSection/HookahMenu';
import ColdDrinksMenu from '../../components/MenuSection/ColdDrinksMenu';
import CoffeeMenu from '../../components/MenuSection/CoffeeMenu';
import DessertsMenu from '../../components/MenuSection/DessertsMenu';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
      <Stack.Navigator
        initialRouteName="LanguageSelection"
        screenOptions={{
          headerTitle: '', // Removes the title text from the header
          headerTransparent: true, // Makes the header background transparent
          headerTintColor: '#FDEAC1', // Sets the color of the back button (you can customize this)

        }}
      >
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
        <Stack.Screen name="HookahMenu" component={HookahMenu} />
        <Stack.Screen name="ColdDrinksMenu" component={ColdDrinksMenu} />
        <Stack.Screen name="CoffeeMenu" component={CoffeeMenu} />
        <Stack.Screen name="DessertsMenu" component={DessertsMenu} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
