
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainHome from "./src/screens/mainHome";
import {Router, Stack, Scene} from 'react-native-router-flux';
import AnimationsScreen from "./src/screens/animationsScreen";



export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key={"root"}>
            <Scene key={"homeScreen"} component={MainHome} title={"Home"} hideNavBar={true} initial={true}/>
            <Scene key={"animationsScreen"} component={AnimationsScreen} title={"Animations"} />

        </Stack>
      </Router>
    );
  }
}

