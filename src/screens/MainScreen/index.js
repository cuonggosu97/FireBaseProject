import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    TouchableOpacity
} from 'react-native'
import firebase from "react-native-firebase";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    handleLogout = () => {
        firebase.auth().signOut()
    }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
        console.log(currentUser)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>
                    Hi {this.state.currentUser && this.state.currentUser.email}
                </Text> */}
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 21.012492,
                        longitude: 105.812403,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
                <TouchableOpacity
                    style={styles.buttonLogout}
                    onPress={() => { this.handleLogout() }}
                >
                    <Text style={styles.titleButtonLogout}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLogout: {
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 25,
    },
    titleButtonLogout: {
        fontSize: 20
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
