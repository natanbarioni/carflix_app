import React, { useState, useEffect } from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import style from '../styles/style';
import md5 from 'js-md5'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Comics({navigation: {goBack}, navigation}) {
    const [ comics, SetComics ] = useState([])
    const [loading, setLoading] = useState(true);

    const PUBLIC_KEY = "318c53b6e538d02e456e19b2052d81f3"
    const PRIVATE_KEY = "a39e4c2b8a2c1162c370fe115e4ad0d281197e69"
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/comics?limit=100&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            SetComics(data.data.results)
            setLoading(false)
            if (data.data.results == '') {
                setLoading(true)
            }
        })
    },[])
    
    function ComicsShow(item){
        const { id, title, thumbnail } = item.item
        return(
            <TouchableOpacity onPress={() => navigation.navigate("ComicsDetails", {idComics: id})}>
                <View style={style.BlocoComics}>
                    <Image style={style.ImgComics} source={{ uri: thumbnail.path + '.' + thumbnail.extension }} />
                    <Text style={style.DetalhesComics}>ID: {id}</Text>
                    <Text numberOfLines={2} style={style.DetalhesComics}>Titulo: {title}</Text>
                </View>
            </TouchableOpacity>
        );
    }


    if (loading == true) {
        return(
            <View style={style.containerLoading}>
                <ActivityIndicator 
                    size='large'
                    color="#f0141e"
                />
            </View>)
    }
    else{
        return (
            <View style={style.ContainerComics}>
                <View style={style.ContainerTituloPagina}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <View style={style.row}>
                            <Icon name="chevron-back" size={30} color={'#fff'}></Icon>
                            <Text style={style.TituloPagina}>Quadrinhos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    key={'#'}
                    data={comics}
                    horizontal={false}
                    keyExtractor={(comics) => comics.id.toString()}
                    renderItem={ComicsShow}
                    style={{maxWidth: '100%', paddingLeft: 50, paddingRight: 50}}
                    numColumns={1}
                />
                
            </View>
        );
    }
}