/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import HomeScreen from './src/HomeScreen'
import ProfileScreen from './src/ProfileScreen'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
},
{
  initialRouteName: "Home"
}
);

const App = createAppContainer(MainNavigator);


export default App;
