/*
 * Developed by Emanuel Cepoi on 6/10/19 3:22 AM.
 * Last modified 6/10/19 3:22 AM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import {PanResponder, StyleSheet, Text, TouchableOpacity, View} from 'react-native'


class TouchedAreasScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coordonates : [],
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onStartShouldSetPanResponderCapture: (event, gestureState) => true,
            onMoveShouldSetPanResponder: (event, gestureState) => false,
            onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
            onPanResponderGrant: (event, gestureState) => false,
            onPanResponderMove: (event, gestureState) => false,
            onPanResponderRelease: (event, gestureState) => {
                this.setState({
                    coordonates: [...this.state.coordonates, {x: event.nativeEvent.locationX.toFixed(3),
                                                              y: event.nativeEvent.locationY.toFixed(3)} ]
                })

            }
        });
    }

    clearTouches = () => {
        this.setState({coordonates : []})
    }

    render() {
        return (
            <View style={{padding: 16}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>The container below will highlight every touch</Text>
                </View>
                <View {...this._panResponder.panHandlers} style={styles.touchesContainer}>
                    {this.state.coordonates.map( (item, index) => {
                        return(
                            <View key={index} style={[styles.circle, {marginLeft: Number(item.x), marginTop: Number(item.y), zIndex: 3 + index}]}></View>
                        )
                    } )}
                </View>

                <TouchableOpacity onPress={() => this.clearTouches()}>
                    <Text>Clear Touches</Text>
                </TouchableOpacity>

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

    touchesContainer: {
        width: '100%',
        height: 400,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    circle: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 15,
        position: 'absolute'
    }
});
export default TouchedAreasScreen;