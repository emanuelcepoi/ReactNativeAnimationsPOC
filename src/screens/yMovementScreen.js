/*
 * Developed by Emanuel Cepoi on 6/10/19 2:30 AM.
 * Last modified 6/10/19 2:13 AM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import {PanResponder, StyleSheet, Text, View} from "react-native";

class YMovementScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yValue: 0,
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                if(gestureState.moveY >= 240) {
                    // do nothing
                } else {
                    this.setState({yValue: gestureState.moveY})
                }
            }
        })
    }

    render() {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>The square can only be moved on the Y axis</Text>
                </View>
                <View style={styles.itemsContainer}>
                    <View style={styles.squareContainer}>
                        <View {...this._panResponder.panHandlers} style={[styles.square, {top: this.state.yValue}]} />
                    </View>
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

    itemsContainer: {
        alignItems: 'center'
    },

    squareContainer: {
        width: 100,
        height: 300,
        backgroundColor: '#fff',
        marginTop: 10,
        alignItems: 'center',
    },
    square: {
        width: 70,
        height: 70,
        backgroundColor: 'red'
    }

});
export default YMovementScreen;
