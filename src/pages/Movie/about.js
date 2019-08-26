import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Creators as ActionsUser } from '../../store/ducks/users';

import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from '../style';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faUsers, faStar } from '@fortawesome/free-solid-svg-icons'

class Movie extends Component{

    handleAddMovieList = async () => {
        const { addMovieList, navigation } = this.props;
        await addMovieList({ dados: { ...navigation.state.params } })
        Alert.alert('♥', 'O filme foi adicionado a sua lista de favoritos')
    }

    render(){
        const { navigation, logged } = this.props;
        const { overview, name, poster, popularity, score } = navigation.state.params;

        return(<>
            <View style={ styles.movieContainer }>
                <Image
                    style={ styles.mostPopularImage }
                    source={{ uri: `https://image.tmdb.org/t/p/w400${poster}`}} 
                />
                <View style={ styles.description }>
                    <Text style={ styles.titleText }>{ name }</Text>
                    <Text style={ styles.overviewText }>{ overview }</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={ styles.popularity }>
                            <FontAwesomeIcon 
                                icon={ faUsers }
                                style={{ margin: 5 }}
                                color="red"
                                size={15}
                            />
                            <Text style={ styles.overviewText }>{ popularity }</Text>
                        </View>
                        <View style={ styles.score }>
                            <FontAwesomeIcon 
                                icon={ faStar }
                                style={{ margin: 5 }}
                                color="yellow"
                                size={15}
                            />
                            <Text style={ styles.overviewText }>{ score }</Text>
                        </View>
                    </View>
                    { logged ? (
                        <View style={ styles.actionsContainer }>
                            <Text style={{ fontSize: 10, margin: 5 }}>Love It</Text>
                            <TouchableOpacity onPress={() => this.handleAddMovieList()}>
                                <FontAwesomeIcon 
                                    icon={ faHeart }
                                    style={{ margin: 5 }}
                                    color="red"
                                    size={15}
                                />
                            </TouchableOpacity>
                        </View>
                    ):(<></>)}
                </View>
            </View>
        </>)
    }
};

const mapStateToProps = ({ users }) => {
    const { user, logged } = users;

    return {
        user,
        logged
    }
};
const { addMovieList } = ActionsUser
export default connect(mapStateToProps, {
    addMovieList
})(Movie)