// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import CourseDetails from '../screens/CourseDetails';
import Feedback from '../screens/Feedback';
import AboutPage from '../screens/AboutPage';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="courseDetails" component={CourseDetails} />
    <Stack.Screen name = "feedback" component={Feedback}/>
    <Stack.Screen name = "about" component={AboutPage}/>
    
  </Stack.Navigator>
);

export default AppNavigator;
