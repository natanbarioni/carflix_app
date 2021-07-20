import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import style from '../styles/style'

export default function Inicio({navigation}) {
    return (
        <View style={style.ContainerInicio}>
            <Image style={style.LogoInicio} source={require('../icons/icon.png')} />

            <Text style={style.TextoBemvindo}>Bem-vindo, venha conhecer mais!</Text>
            
            <TouchableOpacity style={style.BotaoInicio} onPress={() => navigation.navigate("Comics")}>
                <Text style={style.TextoBtn}>Vamos lá</Text>
            </TouchableOpacity>
        </View>
    );
}