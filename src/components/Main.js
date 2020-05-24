import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import Map from './Map';
import Form from './Form';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class LoadingPage extends Component {
  render()
  {
    
      return (
        <Map />
      );
 
}
}
const styles = StyleSheet.create({
  initialLoading : {
     width : '100%',
     height : 200,
     flex: 0.8,
     justifyContent: "center",
     alignItems: "center"
   },
   initialText : {
     fontSize: 40,
     fontWeight: "bold",
     justifyContent: "center",
     alignItems: "center"
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignContent: 'center'
   }
 });


const TapNavigator = createMaterialBottomTabNavigator(
  {
    Map: {
    screen: Map,
   },
   Form: {
     screen: Form,
   }
 },
 {
   initialRouteName: 'Map',
   activeColor: '#ffffff',
   inactiveColor: '#bda1f7',
   barStyle: { backgroundColor: '#6948f4' },
 }
);

export default createAppContainer(TapNavigator)