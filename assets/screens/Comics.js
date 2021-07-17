import React, { useState, useEffect } from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import style from '../styles/style';

export default function Comics({ navigation }) {
    return (
        <View style={style.ContainerComics}>
            <TouchableOpacity>
                <View style={style.BlocoComics}>
                    <Image style={style.ImgComics} source={require('../icons/icon.png')} />
                    <Text style={style.DetalhesComics}>ID: </Text>
                    <Text style={style.DetalhesComics}>Titulo: </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}