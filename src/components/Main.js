import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { fetchAreas } from "../actions/fetchData";

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
      <View>
          {areas.length ? people.map((area, i) => <Text key={i}>{area.name}</Text>) : <Text>No People</Text>}
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
const mapStateToProps = state => ({
  areas: state.areas,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = { fetchAreas };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
