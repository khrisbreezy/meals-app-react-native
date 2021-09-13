import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { NavigationContainer } from '@react-navigation/native';

import MealNavigator from './navigation/mealNavigator';
import CategoriesScreen from './screens/CategoriesScreen';

const fecthFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [dataLoading, setDataLoading] = useState(false);

  if (!dataLoading) {
    return <AppLoading startAsync={fecthFonts} onFinish={() => setDataLoading(true)} onError={console.warn} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category Screen" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
