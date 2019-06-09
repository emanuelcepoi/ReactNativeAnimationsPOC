import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated} from 'react-native';

class AnimationsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeValue: new Animated.Value(1),
            fadedState: false
        }
    }

    _fadeAnimation = () => {

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

    render() {
        return (
            <ScrollView>
               <View style={styles.animationCategory}>
                   {/* Beginning of fade out animation */}
                   <View style={styles.categoryTitleContainer}>
                       <Text style={styles.categoryTitle}>Fade Animation</Text>
                       <Animated.View style={[styles.firstSquare, {opacity: this.state.fadeValue}]}></Animated.View>
                       <TouchableOpacity style={styles.button} onPress={() => this._fadeAnimation()}>
                           <Text style={styles.buttonText}>Start</Text>
                       </TouchableOpacity>
                   </View>
                   {/* Ending of fade out animation*/}

               </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    animationCategory: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff'
    },
    categoryTitleContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    categoryTitle: {
        color: '#000',
        fontSize: 15,
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