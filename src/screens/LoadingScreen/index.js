import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    ActivityIndicator
} from 'react-native'
import firebase from "react-native-firebase";

export default class LoadingScreen extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            setTimeout(() => {
                this.props.navigation.navigate(user ? 'Main' : 'Login')
            }, 1000)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size='large'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
