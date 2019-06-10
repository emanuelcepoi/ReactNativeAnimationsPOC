/*
 * Developed by Emanuel Cepoi on 6/10/19 3:22 AM.
 * Last modified 6/10/19 2:34 AM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import MainHome from "./src/screens/mainHome";
import {Router, Scene, Stack} from 'react-native-router-flux';
import AnimationsScreen from "./src/screens/animationsScreen";
import XMovementScreen from "./src/screens/xMovementScreen";
import YMovementScreen from "./src/screens/yMovementScreen";
import BothAxisMovementScreen from "./src/screens/bothAxisMovementScreen";
import TouchedAreasScreen from "./src/screens/touchedAreasScreen";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key={"root"}>
            <Scene key={"homeScreen"} component={MainHome} title={"Home"} hideNavBar={true} initial={true}/>
            <Scene key={"animationsScreen"} component={AnimationsScreen} title={"Animations"} />
            <Scene key={"xMovementScreen"} component={XMovementScreen} title={"X Axis Movement Gesture"} />
            <Scene key={"yMovementScreen"} component={YMovementScreen} title={"Y Axis Movement Gesture"} />
            <Scene key={"bothAxisMovementScreen"} component={BothAxisMovementScreen} title={"Both Axis Movement Gesture"} />
            <Scene key={"touchedAreasScreen"} component={TouchedAreasScreen} title={"Touched Areas Highlight"} />
        </Stack>
      </Router>
    );
  }
}

