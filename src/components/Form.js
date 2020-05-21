import React, { Component } from 'react';
import {Platform, StyleSheet, Text, TextInput, View,
        Dimensions,TouchableOpacity,Button,Alert,Image,
        ImageBackground,StatusBar} from 'react-native';
import { postArea } from "../actions/fetchData";
import { connect } from 'react-redux';
class Form extends Component {

  state = { id: '', name: '', geolocation: { lat : this.props.navigation.state.params.lat, lng : this.props.navigation.state.params.lon }, signalStrength: '', description: '', carrier: ''}

  handleSubmit = (area) => {
    console.log('checking')
    console.log(area)
    this.props.postArea(area)
  }


  render() {
    console.log('form')
    console.log(this.props)
    console.log(this.state) 
    return (
      <View styles={styles.container}>
        <View styles={styles.inputContainer}>
          <TextInput 
          style={styles.inputs}
          placeholder="Name"
          onChangeText={((name) => this.setState({name}))}/>
        </View>
        <View styles={styles.inputContainer}>
          <TextInput 
          style={styles.inputs}
          placeholder="Signal Strength ex>None or Weak"
          onChangeText={((signalStrength) => this.setState({signalStrength}))}/>
        </View>
        <View styles={styles.inputContainer}>
          <TextInput 
          style={styles.inputs}
          placeholder="Description"
          onChangeText={((description) => this.setState({description}))}/>
        </View>
        <View styles={styles.inputContainer}>
          <TextInput 
          style={styles.inputs}
          placeholder="Carrier"
          onChangeText={((carrier) => this.setState({carrier}))}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    borderBottomColor: '#05C203',
    backgroundColor: '#FFFFFF',
    borderRadius:5,
    borderBottomWidth: 1,
    width:350,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1'
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
    alignItems: 'center'
 },
})

const mapStateToProps = state => ({
  lat: state.lat,
  lon: state.lon,
});

const mapDispatchToProps = { postArea };
export default connect (mapStateToProps, mapDispatchToProps)(Form);