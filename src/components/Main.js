import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { fetchAreas } from "../actions/fetchData";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Main extends Component {
  componentDidMount() {
    this.props.fetchAreas();
  }

  render()
  {
    console.log(this.props);
    const { error, loading, areas} = this.props;
    if(!loading) {
      return (
        <View styles={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE}
     style={styles.map}
     region={{
       latitude: 41.89193,
       longitude: 12.51133,
       latitudeDelta: 0.015,
       longitudeDelta: 0.0121}}/>
  </View>
      );
  } else {
      return (
      <View>
          <Text>Loading...........</Text>
      </View>
      )
  }
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
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = { fetchAreas };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
