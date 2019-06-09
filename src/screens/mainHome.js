import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeHeader from "../components/homeHeader";
import {Actions} from 'react-native-router-flux';

class MainHome extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
           <View>
               <HomeHeader />
               {/* Beginning of proofs list*/}
               <View style={styles.proofsListContainer}>
                   {/*Beginning of proof item*/}
                   <TouchableOpacity onPress = {() => Actions.animationsScreen() }>
                       <View style={styles.proofItem}>
                            <Text style={styles.proofItemTitle}> Animations </Text>
                       </View>
                   </TouchableOpacity>
                   {/*Ending of proof item*/}

               </View>
               {/*  Ending of proffs list*/}

           </View>
        );
    }
}

const styles = StyleSheet.create({
    proofsListContainer: {
        marginTop: 10
    },
    proofItem: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },

    proofItemTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 5
    }
})



export default MainHome;