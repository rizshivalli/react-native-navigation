import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
class HomeScreen extends React.Component {

    render() {
        //const { navigation} = this.props.navigation;
        const {navigate} = this.props.navigation;
    return (

     <View>

         <Text>This is HomeScreen</Text>
         <Button
          onPress={() => navigate('Profile')} 
          title="Go to Jane's profile"
         />
     </View>
    )
  }
}


export default HomeScreen;