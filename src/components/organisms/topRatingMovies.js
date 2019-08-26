import React from 'react';

import { 
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../pages/style';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const topReatingMovies = ({ topRatingMovies, navigation }) => {
    return(<>
        <Text style={{ marginLeft: 20, marginTop: 10 }}>Top Rated Movies</Text>
        <ScrollView horizontal={true}>
            {
                topRatingMovies.map((item) => (
                    <View style={ styles.productContainer } key={item.id}>
                        <Image
                            style={{width: '100%', height: 200 }}
                            source={{ uri: `https://image.tmdb.org/t/p/w400${item.poster_path}`}} 
                        />
                        
                        <View style={{
                            position: 'absolute', left: 80, flex: 1, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ backgroundColor: "white", opacity: 0.5, borderRadius: 20, padding: 10, borderWidth: 1, borderColor: '#c62828' }}>
                                {item.vote_average}
                            </Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('About', {
                                    name: item.title,
                                    poster: item.poster_path,
                                    overview: item.overview,
                                    popularity: item.popularity,
                                    score: item.vote_average
                                })}
                            >
                                <FontAwesomeIcon
                                    icon={ faPlay }
                                    style={{ margin: 10, borderColor: 'white', padding: 10 }}
                                    color="#c62828"
                                    size={15}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ backgroundColor: '#081c24', color: 'white', fontSize: 11, height: 30, padding: 5 }}>{item.title}</Text>                        
                    </View>
                ))
            }
        </ScrollView>
    </>)
}

export default topReatingMovies;