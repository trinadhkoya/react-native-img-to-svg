/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';
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
            <ScrollView>

                <GiftCardIco2 width={150} height={100} fill={'#6e56a4'} stroke={2} viewBox={'0 0 58 58'}
                              lightColor={'#6e56a4'}/>
                <LiveMusicIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                              lightColor={'#f48990'}/>
                <Plate1Ico width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                              lightColor={'#f48990'}/>
                <OrdersIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                           lightColor={'#f48990'}/>
                <Plate2Ico width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                           lightColor={'#f48990'}/>

                <ShoppinCartIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                                lightColor={'#f48990'}/>

                <BookingIco width={100} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                            lightColor={'#f48990'}/>
                <Buffet width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                        lightColor={'#f48990'}/>
                <Smily width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                       lightColor={'#f48990'}/>
                <DiscountIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                             lightColor={'#f48990'}/>
                <ComboIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                          lightColor={'#f48990'}/>
                <GiftCardIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                             lightColor={'#f48990'}/> <ShoppinCartIco width={150} height={100} fill={'#eb3a42'}
                                                                      stroke={2} viewBox={'0 0 58 58'}
                                                                      lightColor={'#f48990'}/>
                <SupportIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                            lightColor={'#f48990'}/>
                <ZcardIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                          lightColor={'#f48990'}/>
                <DesertIco width={150} height={100} fill={'#eb3a42'} stroke={2} viewBox={'0 0 58 58'}
                           lightColor={'#f48990'}/>

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
