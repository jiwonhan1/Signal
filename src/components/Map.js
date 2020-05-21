import React, { Component, useState, PropTypes} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Alert , Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { currentLocation } from '../actions/fetchData';
import {changeLocation} from '../actions/actions';
import { getAddress } from '../actions/latlngReserse';
import { mapRetroStyle } from '../style/mapStyle';
import Form from './Form';


class Map extends Component {
  componentDidMount() {
    this.props.currentLocation();
    
  }
  onMapLocation = (region) => {
    
    console.log('----onMapLoction----')
    let lat = region.latitude
    let lon = region.longitude
    let latDelta = region.latDelta
    let lonDelta = region.lonDelta
    this.props.changeLocation(lat, lon, latDelta, lonDelta);
    console.log(lat);
    console.log(lon);
  }

    onRegionChange = () => {
    const {lat, lon, address} = this.props;
    Alert.alert(
      'Would you like to report this area as a bad reception area?',
      address,
    
      [
        {text: 'OK', onPress: () => this.props.navigation.navigate('Form', {lat, lon})},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      {cancelable: false},
    );
  }
      render(){
        const { areas, lat, lon, latDelta, lonDelta } = this.props;
        console.log('hi');
        console.log('asd');
        this.props.getAddress(lat, lon)
      return (
        <View styles={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE}
        customMapStyle={mapRetroStyle}
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: latDelta,
          longitudeDelta: lonDelta,
        }}
        onRegionChangeComplete={region => this.onMapLocation(region)}
        onLongPress={this.onRegionChange}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        >
          {areas.map((area, i) => 
            <Marker 
            key={i}
            coordinate={{
              latitude: area.geolocation.lat,
              longitude: area.geolocation.lng,
            }}
            title={area.name}
            description={area.description}>
            <Image
                    source={require('../../assets/signal.png')}
                    style={{ height: 35, width: 35 }}
                    resizeMode="contain"
            />
            </Marker>  
            )}
        </MapView>
        </View>
      );  
      }
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
  areas: state.areas,
  address: state.address,
  lat: state.lat,
  lon: state.lon,
  latDelta: state.latDelta,
  lonDelta: state.lonDelta
});

const mapDispatchToProps = { currentLocation, changeLocation, getAddress };

export default connect(mapStateToProps, mapDispatchToProps)(Map);
