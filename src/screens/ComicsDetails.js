import React, {useState, useEffect} from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, Text, Linking, ScrollView } from 'react-native';
import style from '../styles/style';
import md5 from 'js-md5';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';



export default function ComicsDetails({ navigation: {goBack}, route}) {
    const { idComics } = route.params;
    const [ comics, SetComics ] = useState([])
    const [loading, setLoading] = useState(true);
    const PUBLIC_KEY = "318c53b6e538d02e456e19b2052d81f3"
    const PRIVATE_KEY = "a39e4c2b8a2c1162c370fe115e4ad0d281197e69"
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)


    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/comics/${idComics}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`, {
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
    
    var UrlDetail = ''
    comics.map(comic => UrlDetail = comic.urls.find(link => link.type == "detail"))

    var Data = ''
    comics.map(comic => Data = comic.dates.find(link => link.type == "onsaleDate"))

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
            <View style={style.ContainerDetails}>
                <View style={style.ContainerTituloPagina}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <View style={style.row}>
                            <Icon name="chevron-back" size={30} color={'#fff'}></Icon>
                            <Text style={style.TituloPagina}>Detalhes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow: 1, alignItems: 'center', paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 10}}>
                    {comics.map(comic =>
                        <Image key={comic.id} style={style.CapaComics} source={{uri: comic.thumbnail.path + '.' + comic.thumbnail.extension}} />
                    )}
                    {comics.map(comic =>
                        <Text key={comic.id} style={style.ComicsDetails}>{comic.title}</Text>
                    )}
                    {comics.map(comic =>
                        <Text key={comic.id} style={style.ComicsDescrip}>{comic.description}</Text>
                    )}
                    {comics.map(comic =>
                        <Text key={comic.id} style={style.DataDetails}>Data: {moment(Data.date).format('DD/MM/YYYY')}</Text>
                    )}
                    {comics.map(comic =>
                        <Text key={comic.id} style={style.DataDetails}>Páginas: {comic.pageCount}</Text>
                    )}
                    {comics.map(comic =>
                        <TouchableOpacity key={comic.id} style={style.BotaoDetalhes} onPress={() => Linking.openURL(UrlDetail.url)}>
                            <Text style={style.TextoBtn}>Ver mais detalhes</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        );
    }
}