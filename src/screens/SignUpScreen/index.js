import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    TouchableOpacity, TextInput,
    Dimensions, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import firebase from "react-native-firebase";

const { width, height } = Dimensions.get('window')

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repassword: '',
            errorMessage: null
        }
    }

    handlesSignUp = () => {
        if (this.state.password === this.state.repassword) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => this.props.navigation.navigate('Main'))
                .catch(error => this.setState({ errorMesage: error.message }))
        } else {
            alert('Password is not the same')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={(Platform.OS === 'ios') ? "padding" : null}
            >
                <TouchableWithoutFeedback
                    style={styles.container}
                    onPress={() => Keyboard.dismiss()}
                >
                    <View style={styles.container}>
                        <Text style={styles.titleSignUp}>
                            Sign Up
                        </Text>
                        {
                            this.state.errorMessage
                            &&
                            <Text style={styles.errorMesage}>
                                {this.state.errorMessage}
                            </Text>
                        }
                        <View style={styles.viewContent}>
                            <Text style={styles.textEmailPassword}>
                                Email
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                autoCapitalize='none'
                                autoCorrect={false}
                                returnKeyType='next'
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                onSubmitEditing={() => this.refs.txtPassword.focus()}
                            />
                            <Text style={styles.textEmailPassword}>
                                Password
                            </Text>
                            <TextInput
                                ref={'txtPassword'}
                                style={styles.inputText}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType='next'
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                onSubmitEditing={() => this.refs.txtRePassword.focus()}
                            />
                            <Text style={styles.textEmailPassword}>
                                Re-Password
                            </Text>
                            <TextInput
                                ref={'txtRePassword'}
                                style={styles.inputText}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType='go'
                                onChangeText={repassword => this.setState({ repassword })}
                                value={this.state.repassword}
                                onSubmitEditing={() => {
                                    this.handlesSignUp()
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonSignUp}
                            onPress={() => {this.handlesSignUp()}}
                        >
                            <Text style={styles.titleButtonSignUp}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonToLogin}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.titleButton}>
                                Already have an account? Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    titleSignUp: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 15,

    },
    viewContent: {
        width: width - 100,
        height: 220,
        paddingLeft: 10,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    textEmailPassword: {
        fontSize: 16,
    },
    inputText: {
        height: 35,
        width: width - 110,
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    buttonSignUp: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'grey'
    },
    buttonToLogin: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 15
    },
    titleButton: {
        fontSize: 14
    },
    titleButtonSignUp: {
        fontSize: 25
    },
    errorMesage: {
        color: 'red'
    }
})
