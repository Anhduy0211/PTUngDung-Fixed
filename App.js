import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
;

import * as fb from 'firebase';
import {firebaseConfig} from './config';
fb.initializeApp(firebaseConfig);

import LoginScreen from './components/LoginScreen';
import LoadingScreen from './components/LoadingScreen';
import Main from './components/MainComponent';
import UserPanel from './components/UserPanel';
import Score from './components/Score'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';


const AppSwitchNavigator = createSwitchNavigator({
  // LoadingScreen: LoadingScreen,
  // LoginScreen:LoginScreen,
  MainScreen: Main,
  UserPanel: UserPanel,
  Score:Score 
})
const AppNavigator= createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  render() {
    return (<AppNavigator />);
  }
}