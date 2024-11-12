import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook for navigation functionality
import LanguageSelection from '../../components/HomePage/LanguageSelection';
import CategorySelection from '../../components/CategorySelection/CategorySelection';
import HookahMenu from '../../components/MenuSection/HookahMenu';
import ColdDrinksMenu from '../../components/MenuSection/ColdDrinksMenu';
import CoffeeMenu from '../../components/MenuSection/CoffeeMenu';
import DessertsMenu from '../../components/MenuSection/DessertsMenu';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const navigation = useNavigation(); // Hook to access navigation methods

  return (
    <Stack.Navigator
      initialRouteName="LanguageSelection"
      screenOptions={{
        headerTitle: '', // Removes the title text from the header
        headerTransparent: true, // Makes the header background transparent
        headerTintColor: '#FDEAC1', // Sets the color of the back button (you can customize this)
        headerLeft: () => (
          <TouchableOpacity
            style={{
              flexDirection: 'row', // Center items horizontally
              alignItems: 'flex-start',  // Center items vertically
              marginLeft: 10, // Adds a bit of margin to the left
              
            }}
            onPress={() => navigation.goBack()} // Go back to the previous screen when pressed
          >
            <Text style={{ fontSize: 30, color: '#FDEAC1' }}>➔</Text>
          </TouchableOpacity>
        ),
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
