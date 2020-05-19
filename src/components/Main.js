import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { fetchAreas } from "../actions/fetchData";
import Map from './Map';
import Geolocation from '@react-native-community/geolocation';
 
class Main extends Component {
  componentDidMount() {
    this.props.fetchAreas();
    
  }
  componentWillUnmount() {
    StatusBar.setHidden(true, 'none');
  }

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(position => {
      console.log(JSON.stringify(position))
    }
    )
}
  
 
  render()
  {
    console.log(this.props);
    console.log('hi');
    this.locateCurrentPosition();
    const { loading } = this.props;
    if(!loading) {
      return (
        <Map />
      );
  } else {
      return (
      <View style={styles.initialLoading}>
        <StatusBar hidden = {true} />  
        <Image source = {{uri:'https://img.icons8.com/ultraviolet/40/000000/high-connection.png'}}
   style = {{ width: 120, height: 120 }}
   />
          <Text style={styles.initialText}>Signal</Text>
      </View>
      )
  }
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
   }
 });

const mapStateToProps = state => ({
  areas: state.areas,
  loading: state.loading,
  error: state.error,
  geolocation: state.geolocation
});

const mapDispatchToProps = { fetchAreas };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
