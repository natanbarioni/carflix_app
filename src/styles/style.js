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
        marginTop: StatusBar.currentHeight,
        padding: 20,
        alignItems: 'center',

    },
    BlocoComics: {
        flex: 1,
        backgroundColor: "#252525",
        marginTop: 10,
        borderRadius: 15,
        height: 700,
        width: '100%',
        maxWidth: '100%',
        marginBottom: 25
    },
    ImgComics: {
        height: 600,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    DetalhesComics: {
        color: '#fff',
        fontSize: 17,
        padding: 5,
        
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    ContainerTituloPagina: {
        height: 70,
        backgroundColor: "#101010",
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0
    },
    TituloPagina: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 23,
    },
});

export default style;