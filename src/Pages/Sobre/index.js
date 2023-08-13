import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class Sobre extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style= {styles.title}>Tela Sobre</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFF00',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: "center"
    }
})