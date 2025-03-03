import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Signup from "./Signup";
import Login from './Login';

const Stack = createStackNavigator();

// Runs the application and includes each screen used for navigation
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
