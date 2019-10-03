import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
class ProfileScreen extends Component {

    render() {
        const { navigation} = this.props.navigation;
    return (

     <View>
         <Text>This is ProfileScreen</Text>
     </View>
    )
  }
}


export default ProfileScreen;