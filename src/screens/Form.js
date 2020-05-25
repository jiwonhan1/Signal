import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { postArea,fetchAreas } from "../actions/fetchData";
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

class Form extends Component {

  state = {name: '', geolocation: { lat : this.props.navigation.state.params ? this.props.navigation.state.params.lat : Alert.alert('Select location', 'Press the area where you would like to report as a signal area',
  [
    {text: 'OK', onPress: () => this.props.navigation.navigate('Map')},
  ],
  {cancelable: false}) , lng : this.props.navigation.state.params ? this.props.navigation.state.params.lon : 0 }, signalStrength: '', description: '', carrier: ''}

  reset = () => {
    return  {name: '', geolocation: { lat : '', lng :  '' }, signalStrength: '', description: '', carrier: ''}
  }

  handleSubmit = (area) => {
    console.log('checking')
    console.log(area)
    this.props.postArea(area)
    // this.setState(this.reset())
    // this.props.fetchAreas();
    this.props.navigation.navigate('Map')

  }


  render() {
   
    console.log(this.state.geolocation.lat)
    console.log('what')
    console.log(this.state.geolocation.lng)
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput 
          style={styles.inputs}
          placeholder="Your name"
          onChangeText={((name) => this.setState({name}))}/>
        </View>
        <View style={styles.inputContainer}>
          <Text>Signal Strength</Text>
          <RNPickerSelect 
            onValueChange={(value)=> this.setState({signalStrength : value})}
            items={[
              {label: 'None', value: 'None'},
              {label: 'Weak', value: 'Weak'},
              {label: 'Okay', value: 'Okay'},
              {label: 'Good', value: 'Good'}
            ]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Describe your signal experience</Text>
          <TextInput 
          style={styles.inputs}
          placeholder="Description"
          onChangeText={((description) => this.setState({description}))}/>
        </View>
        <View style={styles.inputContainer}>
          <Text>Mobile Carrier</Text>
          <RNPickerSelect 
            onValueChange={(value)=> this.setState({carrier : value})}
            items={[
              {label: 'AT&T', value: 'AT&T'},
              {label: 'Tmobile', value: 'Tmobile'},
              {label: 'Verizon', value: 'Verizon'},
            ]}
          />
        </View>
        <TouchableOpacity style={styles.submitButtonText} onPress={() => this.handleSubmit(this.state)}>
          <Text style={styles.submitText}>Report</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#CE0B24",
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width:250,
    height:100,
  },
  inputs:{
    width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
  },
  submitButtonText:{
    color: '#FFFFFF',
    backgroundColor: '#3462FD',
    width:350,
    height:45,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText:{
    color: '#FFFFFF',
 },
})

const mapStateToProps = state => ({
  lat: state.lat,
  lon: state.lon,
});

const mapDispatchToProps = { postArea };
export default connect (mapStateToProps, mapDispatchToProps)(Form);