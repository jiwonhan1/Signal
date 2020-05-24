import React, { Component } from 'react';
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