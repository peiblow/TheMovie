import React from 'react';

import { 
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import styles from '../../pages/style';

const spotMovie = ({ popularMovie, navigation }) => {
    return(<>
        <Image
            style={ styles.mostPopularImage }
            source={{ uri: `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`}} 
        />
        <View style={{ width: "55%", marginLeft: 10 }}>
            <Text style={{ color: 'white' }}>{ popularMovie.title }</Text>
            <Text style={{ fontSize: 10, color: 'white', marginTop: 5, marginBottom: 10 }}>{ popularMovie.overview }</Text>
            <Button 
                title="See more"
                color="#c62828"
                onPress={() => navigation.navigate('About', { 
                    name: popularMovie.title, 
                    poster: popularMovie.poster_path,
                    overview: popularMovie.overview,
                    popularity: popularMovie.popularity,
                    score: popularMovie.vote_average
                }) }
            />                          
        </View>
    </>)
}

export default spotMovie;