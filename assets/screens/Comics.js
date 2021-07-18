import React, { useState, useEffect } from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import style from '../styles/style';
import md5 from 'js-md5'

export default function Comics({ navigation }) {
    const [ comics, SetComics ] = useState([])
    const [loading, setLoading] = useState(true);

    const PUBLIC_KEY = "318c53b6e538d02e456e19b2052d81f3"
    const PRIVATE_KEY = "a39e4c2b8a2c1162c370fe115e4ad0d281197e69"
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`, {
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

        const { id, title } = item.item
      
        return(
            <View style={style.ContainerComics}>
                <TouchableOpacity>
                    <View style={style.BlocoComics}>
                        <Image style={style.ImgComics} source={require('../icons/icon.png')} />
                        <Text style={style.DetalhesComics}>ID: {id}</Text>
                        <Text style={style.DetalhesComics}>Titulo: {title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
      }



    return (
        <>
            {loading ?
                <View style={style.containerLoading}>
                    <ActivityIndicator 
                        size='large'
                        color="#f0141e"
                    />
                </View>
            :
            <FlatList
                key={'#'}
                data={comics}
                keyExtractor={(comics) => comics.id}
                renderItem={ComicsShow}
                numColumns={2}
            />
            }
        </>
    );
}