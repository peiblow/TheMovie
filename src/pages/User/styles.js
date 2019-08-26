import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#c62828',
    },

    logo: { 
        width: 100,
        height: 120,
        margin: 20
    },

    textInput: {
        height: 40,
        minWidth: 200,
        maxWidth: 200,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        color: '#c62828',
        marginBottom: 10
    },

    button: { 
        backgroundColor: "#e53935", 
        color: 'white', 
        width: '52%', 
        padding: 10,
        borderRadius: 5,
        justifyContent: "center"
    },

    buttonText: {
        color: 'white'
    },

    user: {
        flexDirection: 'row',
        margin: 10 
    },

    name: {
        color: 'white', 
        margin: 15
    },

    myList: {
        margin: 10, 
        minWidth: 150, 
        maxWidth: 150
    },

    poster: {
        width: '100%',
        height: 200
    }
});

export default styles