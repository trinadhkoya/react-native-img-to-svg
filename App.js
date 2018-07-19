/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import BookingIco from "./assets/bookingIco";
import Buffet from "./assets/buffet";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    // width, height, fill, stroke, viewBox, style
    render() {
        return (
            <View style={styles.container}>
                <BookingIco width={100} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}/>
                <Buffet width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
