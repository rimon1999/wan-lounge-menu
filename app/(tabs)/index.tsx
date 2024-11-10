// index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; // Adjust path if needed

const App: React.FC = () => {  // Use 'App' as the component name
    return (
            <AppNavigator />
    );
};

export default App;  // Export the component as 'App'
