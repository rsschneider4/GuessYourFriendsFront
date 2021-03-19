import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from "react-native";
import ButtonWithBackground from "./button";
import {StatusBar} from "expo-status-bar";

// Home Screen which includes Login and SignUp Buttons
class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.carContainer}>

                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />

                    <View style={styles.titles}>
                        <Text style={styles.title}>Guess Your Friends</Text>
                        <Text style={styles.subtitle}>Placeholder</Text>
                    </View>

                    <View style={styles.button1}>
                        <ButtonWithBackground onPress={() => {navigate('Host')}} text='Host a Game' color='#d12a3b' />
                    </View>

                    <View style={styles.button2}>
                        <ButtonWithBackground onPress={() => {navigate('Join')}} text='Join a Game' color='#d12a3b' />
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

// Formatting
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    carContainer: {
        width: '100%',
        height: '100%',
    },

    button1: {
        marginTop: '10%',
        alignItems: 'center',
    },

    button2: {
        marginTop: '5%',
        alignItems: 'center',

    },

    titles: {
        marginTop: '22%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#d12a3b'
    },

    title: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white'
    },

    subtitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    crest: {
        width: '100%',
        height: '20%',
        resizeMode: 'contain',
        marginTop: '10%'
        //position: 'absolute',

    }

});

export default Home
