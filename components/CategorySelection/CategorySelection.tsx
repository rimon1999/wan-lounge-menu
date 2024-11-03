import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type CategorySelectionProps = {
  navigation: StackNavigationProp<{
    ItemList: { category: string }; // Define the params for this route
  }>;
};

const CategorySelection: React.FC<CategorySelectionProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Select Category</Text>
      <Button title="Hookah" onPress={() => navigation.navigate('ItemList', { category: 'Hookah' })} />
      <Button title="Drinks" onPress={() => navigation.navigate('ItemList', { category: 'Drinks' })} />
      <Button title="Food" onPress={() => navigation.navigate('ItemList', { category: 'Food' })} />
    </View>
  );
};

export default CategorySelection;
