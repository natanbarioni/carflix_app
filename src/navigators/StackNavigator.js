import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screens/Inicio';
import Comics from '../screens/Comics';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="Comics" component={Comics} />
        </Stack.Navigator>
    );
}

export default MyStack;