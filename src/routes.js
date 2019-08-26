import React from 'react';

import Home from './pages/Main/main';
import Movie from './pages/Movie/about';
import Login from './pages/User/index';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import './config/StatusBarConfig';

import { 
  TouchableOpacity,
  Image
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'TheMOVIE',
        headerLeft: (
          <Image style={{ width: 38, height: 38, marginLeft: 10 }} source={require('./assets/logo.png')} />
        ),
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FontAwesomeIcon 
              icon={ faUser }
              style={{ margin: 10 }}
              color="white"
              size={15}
            />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#c62828', },
        titleStyle: {
          fontFamily: 'Raleway'
        },
      })
    },
    About: {
      screen: Movie,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.name,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#c62828' },     
      })
    },

    Login: {
      screen: Login,
      navigationOptions: () => ({
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#c62828' }       
      })
    }
  })
);

export default Routes;
