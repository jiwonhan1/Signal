import React, { Component, useState, PropTypes} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { currentLocation } from '../actions/fetchData';
import {changeLocation} from '../actions/actions';
class Map extends Component {
  componentDidMount() {
    this.props.currentLocation();
    
  }
  // componentWillMount(nextProps) {
  //   const currentProps = this.props;

  //   if(!currentProps.geolocation && nextProps.geolocation)

  // }

  onMapLocation = (region) => {
    
    console.log('----onMapLoction----')
    let lat = region.latitude
    let lon = region.longitude
    this.props.changeLocation(lat, lon);
    console.log(lat);
    console.log(lon);
  }

    onRegionChange = () => {
    const {lat, lon } = this.props;
    console.log('hi');
    console.log(lat);
    console.log(lon);
  }

  // let currentLocation = this.locateCurrentPosition();

  // const [region, setRegion] = useState({
  //   latitude: currentLocation.coords.latitude,
  //   longitude: currentLocation.coords.longitude,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01
  // });

//   locateCurrentPosition = () => {
//   Geolocation.getCurrentPosition(position => {
//     console.log(JSON.stringify(position))
//   }
//   )
// }
      render(){
        const { lat, lon } = this.props;
        console.log('hi');
      //console.log(geolocation);
        // console.log(this.locateCurrentPosition());
      return (
        <View styles={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // showsMyLocationButton={true}
        onRegionChangeComplete={region => this.onMapLocation(region)}
        onLongPress={this.onRegionChange()}
        showsUserLocation={true}
                showsMyLocationButton={true}
        // onRegionChange={region => {
        //   setLocation({
        //     latitude: region.latitude,
        //     longitude: region.longitude,
        //   });
        // }}
        // onRegionChangeComplete={region => {
        //   setLocation({
        //     latitude: region.latitude,
        //     longitude: region.longitude,
        //   });
        // }}
        />
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

//  Map.propTypes = {
//   region.lat: PropTypes.object,
//   onSurveyResponseSubmit: PropTypes.func,
//   onViewResponsesClick: PropTypes.func,
//   onDeleteSurveyClick: PropTypes.func,
//   onEditSurveyClick: PropTypes.func,
// };

const mapStateToProps = state => ({
  // geolocation: state.geolocation,
  lat: state.lat,
  lon: state.lon,
});

// const mapDispatchToProps = dispatch => ({
//   onRegionChange: (geolocation) => dispatch(currentLocation(geolocation))
// })

const mapDispatchToProps = { currentLocation, changeLocation };
export default connect(mapStateToProps, mapDispatchToProps)(Map);
