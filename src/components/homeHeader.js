/*
 * Developed by Emanuel Cepoi on 6/10/19 1:39 AM.
 * Last modified 6/10/19 1:37 AM.
 * Copyright (c) 2019. All rights reserved
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

class HomeHeader extends Component {
    render() {
        return (
            <View style={styles.homeHeader}>
                <View style={styles.headerTextsContainer}>
                    <Text style={styles.firstHeaderText}> React Native Gestures PoC</Text>
                    <Text style={styles.secondHeaderText}>Emanuel Cepoi</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    headerTextsContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    firstHeaderText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondHeaderText: {
        color: '#000',
        fontSize: 15,
        marginTop: 4
    }
});


export default HomeHeader;