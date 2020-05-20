
import React, { Component, useState, PropTypes} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { currentLocation } from '../actions/fetchData';
import { changeLocation } from '../actions/actions';

class Map extends Component {
  componentDidMount() {
    this.props.currentLocation();
    
  }

  onMapLocation = (region) => {
    
    console.log('----onMapLoction----')
    let latitude = region.latitude
    let longitude = region.longitude
    this.props.changeLocation(latitude, longitude);
    console.log(latitude);
    console.log(longitude);
  }
  onRegionChange = () => {
    const {latitude, longitude } = this.props;
    console.log("onPress")
    console.log(latitude)
    console.log(longitude)
  }
  // componentWillMount(nextProps) {
  //   const currentProps = this.props;

  //   if(!currentProps.geolocation && nextProps.geolocation)

  // }


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
        const { geolocation, latitude } = this.props;
        console.log('----this.props.geolocation----')
        console.log('hishaidiashidjsi')
        console.log(geolocation);
        console.log(latitude);
      return (
        <View styles={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        // initialRegion={{
        //   latitude: geolocation.latitude,
        //   longitude: geolocation.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        region={{
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={region => this.onMapLocation(region)}
        onLongPress={this.onRegionChange}
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
  geolocation: state.geolocation,
  latitude: state.latitude,
  longitude: state.longitude
});

// const mapDispatchToProps = dispatch => ({
//   onRegionChange: (geolocation) => dispatch(currentLocation(geolocation))
// })

const mapDispatchToProps = { currentLocation, changeLocation };
export default connect(mapStateToProps, mapDispatchToProps)(Map);
