import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { fetchAreas } from "../actions/fetchData";
import Main from '../navigation/Main';

class LoadingPage extends Component {
  componentDidMount() {
    this.props.fetchAreas();
    StatusBar.setHidden(true, 'none');
  }
  componentWillUnmount() {
    
  }

  render()
  {
    
    const { loading } = this.props;

    if(!loading) {
      return (
        <Main />
      );
  } else {
      return (
      <View style={styles.initialLoading}>
        <StatusBar hidden = {true} />  
        <Image source={require('../../assets/mainSignal.png')}
          style = {{ width: 120, height: 120 }}/>
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
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignContent: 'center'
   }
 });



const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = { fetchAreas };

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);

