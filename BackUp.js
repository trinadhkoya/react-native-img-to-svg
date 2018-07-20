/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import BookingIco from "./assets/bookingIco";
import Buffet from "./assets/buffet";
import Smily from "./assets/smily";
import DiscountIco from "./assets/discount";
import ComboIco from "./assets/comboIco";
import ShoppinCartIco from "./assets/shoppingCart";
import SupportIco from "./assets/supportIco";
import ZcardIco from "./assets/zCardIco";
import DesertIco from "./assets/desertIco";
import GiftCardIco from "./assets/giftCardIco";
import GiftCardIco2 from "./assets/giftCardIco2";
import LiveMusicIco from "./assets/liveMusicIco";
import Plate1Ico from "./assets/plate1Ico";
import Plate2Ico from "./assets/plate2Ico";
import OrdersIco from "./assets/ordersIco";
import LogoutIco from "./assets/logOutIco";
import LuxuryIco from "./assets/luxuryIco";
import NewInTownIco from "./assets/newInTownIco";
import PubIco from "./assets/pubIco";


const {height, width} = Dimensions.get('window');

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class BackUp extends Component<Props> {

    // width, height, fill, stroke, viewBox, style
    render() {
        return (
            <ScrollView>

                <View style={{alignItems: "center", flex: 1}}>

                    <LogoutIco width={width / 11 / 2} height={width / 11 / 2}
                               fill={'#eb3a42'} stroke={2} viewBox={'0 0 39 49.1'}
                               lightColor={'#f48990'}/>

                    <GiftCardIco2 width={50} height={50} fill={'#6e56a4'} stroke={2}
                                  viewBox={'0 0 53.69 40.81'}
                                  lightColor={'#6e56a4'}/>

                    <LuxuryIco width={50} height={50} fill={'#eb3a42'} stroke={2}
                               viewBox={'0 0 35.76 34.23'}
                               lightColor={'#f48990'}/>

                    <PubIco width={50} height={50} fill={'#eb3a42'} stroke={2}
                            viewBox={'0 0 54.64 40.89'}
                            lightColor={'#f48990'}/>

                    <NewInTownIco width={50} height={50} fill={'#eb3a42'} stroke={2}
                                  viewBox={'0 0 41.67 30'}
                                  lightColor={'#f48990'}/>

                    <LiveMusicIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 47.31 43.85'}
                                  lightColor={'#f48990'}/>

                    <Plate1Ico width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 43.97 43.98'}
                               lightColor={'#f48990'}/>
                    <OrdersIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 41.54 42.01'}
                               lightColor={'#f48990'}/>
                    <Plate2Ico width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 43.97 43.98'}
                               lightColor={'#f48990'}/>

                    <ShoppinCartIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 59.17 43.39'}
                                    lightColor={'#f48990'}/>

                    <BookingIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 41.54 44.18'}
                                lightColor={'#f48990'}/>

                    <Buffet width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 64.79 36.08'}
                            lightColor={'#f48990'}/>

                    <Smily width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 33.87 36.2'}
                           lightColor={'#f48990'}/>

                    <DiscountIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 32.47 36.2'}
                                 lightColor={'#f48990'}/>

                    <ComboIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 52.18 40.76'}
                              lightColor={'#f48990'}/>

                    <GiftCardIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 51.75 38.86'}
                                 lightColor={'#f48990'}/>



                    <SupportIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 43.97 45.4'}
                                lightColor={'#f48990'}/>
                    <ZcardIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 56.39 42.01'}
                              lightColor={'#f48990'}/>
                    <DesertIco width={50} height={50} fill={'#eb3a42'} stroke={2} viewBox={'0 0 66.26 40.18'}
                               lightColor={'#f48990'}/>

                </View>

            </ScrollView>
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
