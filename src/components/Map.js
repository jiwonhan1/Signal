import React, { Component, useState} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { moveToLocation } from '../actions/actions';

const Map = () => {

  // componentWillMount(nextProps) {
  //   const currentProps = this.props;

  //   if(!currentProps.geolocation && nextProps.geolocation)

  // }
  const [region, setRegion] = useState({
    latitude: 47.608166,
    longitude: -122.204566,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
    console.log(region)

      return (
        <View styles={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}/
        
        >
        </View>
      );  
  
}

const styles = StyleSheet.create({
  mapContainer : {
     width : '100%',
     height : 200
   },
  map : {
     width : '100%',
     height : '100%'
   }
 });

const mapStateToProps = state => ({
  geolocation: state.geolocation
});

const mapDispatchToProps = dispatch => ({
  onRegionChange: (geolocation) => dispatch(moveToLocation(geolocation))
})
export default connect(mapStateToProps, mapDispatchToProps)(Map);
