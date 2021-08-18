import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import StackOverflow from './components/StackOverflow';
import LogOut from './components/LogOut';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const ScreenNames = {
  Login: 'Login',
  Main: 'Main',
  Home: 'Home',
  StackOverflow: 'Stackoverflow',
  Logout: 'Logout',
};

function Main() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ScreenNames.Home} component={HomePage} />
      <Drawer.Screen
        name={ScreenNames.StackOverflow}
        component={StackOverflow}
      />
      <Drawer.Screen name={ScreenNames.Logout} component={LogOut} />
    </Drawer.Navigator>
  );
}

const commonOptions = { headerShown: false };

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ScreenNames.Login}>
      <Stack.Screen
        name={ScreenNames.Login}
        component={LoginForm}
        options={commonOptions}
      />
      <Stack.Screen
        name={ScreenNames.Main}
        component={Main}
        options={commonOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
