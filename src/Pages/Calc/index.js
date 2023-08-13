import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';


export default class Calc extends Component{

    constructor(props){
        super(props)
        this.state = {nota1: 0, nota2: 0, faltas: 0, resultado: ""}
        this.calcular = this.calcular.bind(this)
    }

    calcular(){
        const media = this.calcularMedia();
        const isAprovado = this.isAprovado(media);

        this.setState({resultado: isAprovado ? 'Aluno foi aprovado' : 'Aluno foi reprovado'});
    }
    
    calcularMedia(){
        const num1 = parseInt(this.state.nota1);
        const num2 = parseInt(this.state.nota2);
        return (num1 + num2) /2;
    }
    
    isAprovado(media){
        return media >= 6 && this.state.faltas <= 10;
    }
    

    render(){
        const isAprovado = this.state.resultado === 'Aluno foi aprovado';
        
        return(
        <View style = {styles.container}>
            <Text style = {styles.title} >Calculadora </Text>
            <TextInput style = {styles.textInput}
                onChangeText = {(nota1) => {this.setState({nota1})}}
                keyboardType = 'numeric'
                placeholder = 'Nota 1'   
            />
            <TextInput style = {styles.textInput}
                onChangeText = {(nota2) => {this.setState({nota2})}}
                keyboardType = 'numeric'
                placeholder = 'Nota 2'   
            />
            <TextInput style = {styles.textInput}
                onChangeText = {(faltas) => {this.setState({faltas})}}
                keyboardType = 'numeric'
                placeholder = 'Número de faltas'   
            />
            <TouchableOpacity style = {styles.buttonCalc} onPress={this.calcular}>
                <Text style = {styles.textInputCalc}>Calcular</Text>
            </TouchableOpacity>
            <Text style={[styles.textResultado, isAprovado]}> {this.state.resultado}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0E0E6'
    },
    textInput:{
        padding:20,
        backgroundColor: '#FFFFE0',
        marginLeft: 40,
        marginRight:40,
        marginTop: 40,
        fontWeight: 'bold',
        borderRadius: 25
    },
    textInputCalc:{
        padding:20,
        color: '#000',
        fontSize: 20 ,
        backgroundColor: '#FFFFE0',
        marginLeft: 40,
        marginRight:40,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 5,
        textAlign: "justify"
    },
    buttonCalc:{
        margin: 5,
        padding:5,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#37474f'
    },
    textButton:{
        color: '#FFF',
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        alignSelf: 'center'
    },
    textResultado:{
        color: '#000',
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    title:{
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop:20
    }
})