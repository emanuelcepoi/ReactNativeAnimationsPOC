/*
 * Developed by Emanuel Cepoi on 6/10/19 1:39 AM.
 * Last modified 6/9/19 11:11 PM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import {Animated, Easing, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class AnimationsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeValue: new Animated.Value(1),
            fadedState: false,

            xValue: new Animated.Value(0),
            xAxisEnd: false,

            yValue: new Animated.Value(0),
            yAxisEnd: false
        }
    }

    _fadeAnimation = () => {
        // Is the box being displayed?
        if(!this.state.fadedState){
            Animated.timing(this.state.fadeValue, {
                toValue: 0,
                duration: 1000,

            }).start();
            this.setState({fadedState: true})
        } else {
            Animated.timing(this.state.fadeValue, {
                toValue: 1,
                duration: 1000,

            }).start();
            this.setState({fadedState: false})
        }
    };

    _moveOnX = () => {
        if(!this.state.xAxisEnd) {
            Animated.timing(this.state.xValue, {
                toValue: 300,
                duration: 1000,
                asing: Easing.linear
            }).start();

            this.setState({xAxisEnd: true})
        } else {
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 1000,
                asing: Easing.linear
            }).start();

            this.setState({xAxisEnd: false})
        }
    };

    _moveOnY = () => {
        if(!this.state.yAxisEnd) {
            Animated.timing(this.state.yValue, {
                toValue: 100,
                duration: 1000,
                asing: Easing.linear()
            }).start();

            this.setState({yAxisEnd: true})
        } else {
            Animated.timing(this.state.yValue, {
                toValue: 0,
                duration: 1000,
                asing: Easing.linear()
            }).start();

            this.setState({yAxisEnd: false})
        }

    };

    render() {
        return (
            <ScrollView>
               <View style={[styles.animationCategory, {alignItems: 'center'}]}>
                   {/* Beginning of fade out animation */}
                   <View style={styles.categoryTitleContainer}>
                       <Text style={styles.categoryTitle}>Fade Animation</Text>
                   </View>

                   <Animated.View style={[styles.firstSquare, {opacity: this.state.fadeValue}]}></Animated.View>
                       <TouchableOpacity style={styles.button} onPress={() => this._fadeAnimation()}>
                           <Text style={styles.buttonText}>Start</Text>
                       </TouchableOpacity>

               </View>

                {/* Ending of fade out animation*/}

                {/* Beginning of x axis movement*/}
                <View style={styles.animationCategory}>

                <View style={[styles.categoryTitleContainer]}>
                       <Text style={styles.categoryTitle}>X Axis movement</Text>
                </View>

                    <Animated.View style={[styles.firstSquare, {left: this.state.xValue}]}></Animated.View>
                       <TouchableOpacity style={styles.button} onPress={() => this._moveOnX()}>
                           <Text style={styles.buttonText}>Start</Text>
                       </TouchableOpacity>
                  {/* Ending of x axis movement */}
                </View>

                 {/* Beginning of y axis movement*/}
                <View style={[styles.animationCategory, {height: 300, alignItems: 'center'}]}>

                    <View style={[styles.categoryTitleContainer]}>
                        <Text style={styles.categoryTitle}>Y Axis movement</Text>
                    </View>

                    <Animated.View style={[styles.firstSquare, {height: 20, width: 20, top: this.state.yValue}]}></Animated.View>
                    <TouchableOpacity style={[styles.button, {top: 100}]} onPress={() => this._moveOnY()}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                    {/* Ending of x axis movement */}
                </View>
                 {/* Ending of y axis movement*/}


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    animationCategory: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        padding: 10
    },
    categoryTitleContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    categoryTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    firstSquare: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
        marginTop: 30
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }

});
export default AnimationsScreen;