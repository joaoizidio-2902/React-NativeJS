import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.irSobre = this.irSobre.bind(this);
        this.irCalc = this.irCalc.bind(this);
    }

    irSobre(){
        this.props.navigation.navigate("Sobre")
    }
    
    irCalc(){
        this.props.navigation.navigate("Calc")
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Tela Principal</Text>
                <TouchableOpacity style={styles.button} onPress={this.irSobre}>
                    <Text style = {styles.textButton}>Tela second</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.irCalc}>
                    <Text style = {styles.textButton}>Calculadora</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    title:{
        fontSize: 30,
        color: '#FFF',
        alignSelf: "center",
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: "#000",
        padding: 20
    },
    textButton: {
        color: '#FFF',
        fontSize: 18,
        alignSelf: "center"

    }
})