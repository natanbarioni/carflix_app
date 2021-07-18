import React from 'react';
import MyStack from './src/navigators/StackNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}