import PropTypes from 'prop-types';
import React, {Component} from 'react';
// import {NavigationActions} from 'react-navigation';
import {Dimensions, Image, ListView, ScrollView, StyleSheet, Text, View} from 'react-native';
import profileData from "./profile";
import Ionicons from "react-native-vector-icons/Ionicons";

const {height, width} = Dimensions.get('window');

class App extends Component {

    _renderRow = (rowData) => {
        return (
            <View style={styles.draerItemView}>


                <View style={[styles.drawerItem, {
                    width: 44,
                }]}>
                    {rowData.iconData}
                </View>
                <View style={styles.drawerItem}>
                    <Text style={styles.drawerItemText}>
                        {rowData.name}
                    </Text>
                </View>


            </View>
        )
    }

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(profileData.data)
        }
    }

    render() {
        return (
            <View style={[styles.container, {width: width - width / 5}]}>
                {this._renderHeader()}
                {this._renderSeperator()}

                <ScrollView showsVerticalScrollIndicator={false}>
                    <ListView
                        contentContainerStyle={{justifyContent: 'center'}}
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        removeClippedSubviews={false}
                    />
                </ScrollView>
                {this._renderFooter()}


            </View>
        );
    }

    _renderHeader() {
        return (
            <View>
                <View>

                    <View style={{justifyContent: 'flex-start', paddingHorizontal: 20}}>
                        <Ionicons name='ios-close-circle' size={25} color={'#eb3a42'}/>
                    </View>
                </View>

                <View style={styles.header}>
                    <Image
                        style={{width: 68, height: 68, borderRadius: 34}}
                        source={{uri: 'https://avatars1.githubusercontent.com/u/9527766?s=460&v=4'}}
                    />
                    <View style={styles.draerItemView}>
                        <Text style={styles.navItemStyle}>
                            Trinadh Koya
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    _renderSeperator() {
        return (
            <View style={styles.seperator}>
            </View>
        )

    }

    _renderFooter() {
        return (
            <View style={styles.footerContainer}>
                <Text>Version</Text>
            </View>
        )
    }
}

App.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fefefe'
    },
    navItemStyle: {
        alignItems: "center",
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 18,

    },
    draerItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 5

    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
    },
    headerView: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    drawerItem: {
        alignContent: 'center',
        height: 50
    },
    header: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700'
    },
    description: {
        fontSize: 12,
        color: '#000',
        marginTop: 2
    },
    seperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 25,
    },
    drawerItem: {
        alignItems: 'center',
        alignContent: 'center',
        height: 44,
        justifyContent: 'center',
    },
    drawerItemText: {
        paddingHorizontal: 10,
        fontSize: 15,
        alignSelf: 'flex-start'
    }


});
export default App;
