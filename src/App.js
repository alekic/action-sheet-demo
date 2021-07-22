import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import { registerRootComponent } from 'expo';

enableScreens();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);