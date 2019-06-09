/*
 * Developed by Emanuel Cepoi on 6/10/19 1:39 AM.
 * Last modified 6/10/19 1:39 AM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import {PanResponder, StyleSheet, Text, View} from 'react-native';

class XMovementScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xValue: 1
        };

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder : (evt, gestureState) => true,
            onPanResponderMove : (evt, gestureState) => {
                this.setState({xValue: gestureState.moveX})
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>The square can only be moved on the x axis</Text>
                </View>

                <View style={styles.squareContainer}>
                    <View {...this._panResponder.panHandlers} style={[styles.square, {left: this.state.xValue}]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   titleContainer: {
       width: '100%',
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#fff'
   },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    squareContainer: {
        width: '100%',
        height: 100,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    square: {
        width: 70,
        height: 70,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: 'red'
    }
});
export default XMovementScreen;