import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { ImageBackground } from 'react-native';
//import Carousel from '../components/slidernox';
import FadeInView from '../components/textban';




const HomeScreen = ({ navigation }) => (

    <View style={style.container}>

        <ImageBackground style={style.page}
            resizeMode='cover'
            source={require('./logoFonsdal2.png')}>
            <View>

                <FadeInView />

                <Pressable style={style.buttons}
                    onPress={() => navigation.navigate("shop")}  >
                    <Text style={style.text}>GO!!</Text>

                </Pressable>
                
            </View>

        </ImageBackground>


    </View>

);


const style = StyleSheet.create({


    container: {
        flex: 1,
    },

    page: {
        display: 'flex',

        alignItems: 'center',
        width: '100%',
        height: '100%',


    },

    buttons: {
        backgroundColor: '#bc445f',
        width: 100,
        height: 50,
        bottom: 0,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
        elevation: 29,
        marginLeft:143
    },
    text: {

        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },


});



export default HomeScreen;