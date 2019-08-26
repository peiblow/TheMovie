import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    View,
    ScrollView,
    Text,
    ActivityIndicator
} from 'react-native';
import styles from '../style';

import { Creators as ActionsMovies } from '../../store/ducks/movies';

import PopularMovies from '../../components/organisms/popularMovies';
import TopRatingMovies from '../../components/organisms/topRatingMovies';
import SpotMovie from '../../components/organisms/spotMovie';

class Page1 extends Component {

    UNSAFE_componentWillMount(){
        this.props.setMovies();
    }

    render(){
        const { list, topRatingMovies, popularMovie, loading } = this.props;
        return(
            <View styles={ styles.container }>
                <ScrollView>
                    <View style={ styles.mostPopularMovie }>
                        {   loading ? (
                            <ActivityIndicator size="large" color="#c62828" />
                        ):(
                            <SpotMovie popularMovie={popularMovie} navigation={this.props.navigation} />
                        )}
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <PopularMovies lista={list} navigation={this.props.navigation} />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TopRatingMovies topRatingMovies={topRatingMovies} navigation={this.props.navigation} />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 10, color: '#e8e8e8' }}>Created by Pablo ♥</Text>
                    </View>
                </ScrollView>                
            </View>
        ) 
    }
};



const { setMovies } = ActionsMovies
const mapStateToProps = ({ movies }) => {
    const { list, popularMovie, topRatingMovies, loading } = movies;
    return {
        list,
        popularMovie,
        topRatingMovies,
        loading
    }
}
export default connect(mapStateToProps, {
    setMovies
})(Page1);