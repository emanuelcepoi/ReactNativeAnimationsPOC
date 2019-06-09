/*
 * Developed by Emanuel Cepoi on 6/10/19 2:30 AM.
 * Last modified 6/10/19 2:30 AM.
 * Copyright (c) 2019. All rights reserved
 */


import React, {Component} from 'react';
import {PanResponder, StyleSheet, Text, View} from 'react-native'

class BothAxisMovementScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xValue: 0,
            yValue: 0
        };

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                this.setState({xValue: gestureState.moveX, yValue: gestureState.moveY})
            }
        })
    }

    render() {

        return (
            <View style={{padding: 16}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>The square can be moved everywhere</Text>
                </View>

                <View style={styles.squareContainer}>
                    <View {...this._panResponder.panHandlers} style={[styles.square, {left: this.state.xValue, top: this.state.yValue}]} />
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
        height: 400,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    square: {
        height: 70,
        width: 70,
        backgroundColor: '#000',
    }
});
export default BothAxisMovementScreen;

