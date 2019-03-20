import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainScreen from "../screens/MainScreen";

const AppSwitchNavigator = createSwitchNavigator(
    {
        Loading: { screen: LoadingScreen },
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        Main: { screen: MainScreen }
    },
    {
        initialRouteName: 'Loading',
    }
);

const AppContainer = createAppContainer(AppSwitchNavigator)

export default AppContainer