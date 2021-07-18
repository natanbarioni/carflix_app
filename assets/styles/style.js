import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
    ContainerInicio: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoInicio: {
        width: 230,
        height: 130,
        borderRadius: 25,
        backgroundColor: '#f0141e'
    },
    TextoBemvindo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 60,
        marginBottom: 20
    },
    BotaoInicio: {
        backgroundColor: '#f0141e',
        width: 115,
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextoBtn: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    ContainerComics: {
        backgroundColor: '#000',
        flex: 1,
        padding: 20,
        marginTop: StatusBar.currentHeight,
    },
    BlocoComics: {
        backgroundColor: "#252525",
        marginTop: 10,
        borderRadius: 20,
        width: '50%',
        height: 250
    },
    ImgComics: {
        width: '100%',
        height: '60%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    DetalhesComics: {
        color: '#fff',
        fontSize: 15,
        padding: 5
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
});

export default style;