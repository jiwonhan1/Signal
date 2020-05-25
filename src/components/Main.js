import React, { Component } from 'react';
import Map from '../screens/Map';
import Form from './Form';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

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
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({focused}) =><Entypo name="map" size={20} color={focused ? '#FFF' : '#DACE91'}/>,
     }
   },
   Form: {
     screen: Form,
     navigationOptions: {
      tabBarLabel: 'Report the area',
      tabBarIcon: ({focused}) =><Octicons name="report" size={20} color={focused ? '#FFF' : '#DACE91'}/>,
     }
   }
 },
 {
   initialRouteName: 'Map',
   activeColor: '#ffffff',
   inactiveColor: '#bda1f7',
   barStyle: { backgroundColor: '#1565C0' },
 }
);

export default createAppContainer(TapNavigator)