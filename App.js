/*
 * Developed by Emanuel Cepoi on 6/10/19 1:39 AM.
 * Last modified 6/10/19 1:39 AM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import MainHome from "./src/screens/mainHome";
import {Router, Scene, Stack} from 'react-native-router-flux';
import AnimationsScreen from "./src/screens/animationsScreen";
import XMovementScreen from "./src/screens/xMovementScreen";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key={"root"}>
            <Scene key={"homeScreen"} component={MainHome} title={"Home"} hideNavBar={true} initial={true}/>
            <Scene key={"animationsScreen"} component={AnimationsScreen} title={"Animations"} />
            <Scene key={"xMovementScreen"} component={XMovementScreen} title={"X Axis Movement Gesture"} />
        </Stack>
      </Router>
    );
  }
}

