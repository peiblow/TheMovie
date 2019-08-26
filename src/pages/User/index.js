import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Creators as ActionsUser } from '../../store/ducks/users';

import { 
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

class UserLogin extends Component {
    state = {
        username: ''
    }
    
    handleSubmit = () => {
        const { setUser } = this.props;
        const { username } = this.state;

        setUser({ username })
        this.props.navigation.navigate('Home')
    }

    render(){
        const { user, logged, setLogout } = this.props;
        return(
            <View style={ styles.container }>
                { !logged ? (<>
                    <Image style={ styles.logo } source={require('../../assets/logo.png')} />
                    <TextInput
                        style={ styles.textInput }
                        placeholder="Username"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.text}
                    />
                    <TouchableOpacity onPress={() =>  this.handleSubmit()} style={ styles.button }>
                        <Text style={ styles.buttonText } >Login</Text>
                    </TouchableOpacity>
                </>):(<>
                    <View style={ styles.user }>
                        <Avatar
                            rounded
                            source={require('../../assets/logo.png')}
                            size="medium"
                        />
                        <Text style={ styles.name } >{`Hello ${ user.name }`}</Text>
                    </View>

                    <TouchableOpacity onPress={() =>  setLogout()} style={ styles.button }>
                        <Text style={ styles.buttonText } >Logout</Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 10, color: 'white' }}>Your Favorite Movies</Text>
                    { user && user.list.length > 0 ? (
                        <ScrollView horizontal={true}>
                            { user.list.map((item) => {
                                return (
                                    <View style={ styles.myList } key={item.name}>
                                        <Image
                                            style={{width: '100%', height: 200}}
                                            source={{ uri: `https://image.tmdb.org/t/p/w400${item.poster}`}}
                                        />
                                        
                                        <Text style={{ backgroundColor: '#081c24', color: 'white', fontSize: 11, height: 30, padding: 5, justifyContent: 'space-between' }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    ):(<Text style={{ color: 'white' }}>Nothing to show</Text>)}
                </>)
                }
            </View>
        );
    }
}
const mapStateToProps = ({ users }) => {
    const { user, logged } = users;

    return {
        user,
        logged
    }
};
const { setUser, setLogout } = ActionsUser
export default connect(mapStateToProps, {
    setUser,
    setLogout
})(UserLogin)