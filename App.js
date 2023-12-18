import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminLoginScreen from './AdminLoginScreen';
import AdminHomeScreen from './AdminHomeScreen';
import StudentRegistrationScreen from './StudentRegistrationScreen';
import SearchScreen from './SearchScreen';
import StudentLoginScreen from './StudentLoginScreen';
import StudentHomeScreen from './StudentHomeScreen';
import CourseRegistrationScreen from './CourseRegistrationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminLogin">
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="StudentRegistration" component={StudentRegistrationScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
        <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
        <Stack.Screen name="CourseRegistration" component={CourseRegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
