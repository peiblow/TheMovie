import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        margin: 20
    },

    logo: {
        alignSelf: 'center',
        padding: '30px',
    },

    lista: {
        padding: 20,
        margin: 200,
        display: 'flex'
    },

    productContainer: {
        margin: 10,
        minWidth: 200,
        maxWidth: 200,
        justifyContent: "center",
    },

    productTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ce93d8",
        textAlign: "center"
    },

    productDescription: {
        fontSize: 15,
        color: "#ba68c8",
        marginTop: 5,
        lineHeight: 24,
    },

    mostPopularMovie: {
        padding: 20,
        minWidth: '100%',
        maxWidth: '100%',
        justifyContent: "center",
        backgroundColor: '#081c24',        
        flexDirection: 'row'
    },

    mostPopularImage: {
        width: 150, 
        height: 200,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#081c24',
        borderRadius: 10
    },

    movieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#081c24',
        flexDirection: 'row'
    },

    description: { 
        width: "55%", 
        marginLeft: 10 
    },

    titleText: {
        color: 'white'
    },

    overviewText: { 
        fontSize: 10, 
        color: 'white', 
        marginTop: 5, 
        marginBottom: 10 
    },

    popularity: {
        flexDirection: 'row'
    },

    score: {
        flexDirection: 'row'
    },

    actionsContainer: { 
        width: '80%', 
        backgroundColor: 'white', 
        flexDirection: 'row',
        margin: 8, 
        padding: 10, 
        borderRadius: 10 
    }
});

export default styles