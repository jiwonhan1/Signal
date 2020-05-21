  
import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  Switch
} from "react-native";
import { connect } from "react-redux";
import * as Icon from "react-native-vector-icons";

import { setFilters } from "../modules/campings";

const { width, height } = Dimensions.get("screen");

class Settings extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    sort: "distance",
    option_full: true,
    option_rated: true,
    option_free: false
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Map")}
          >
            <Icon.Ionicons name="md-arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Filter</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Map")}
          >
            <Icon.Ionicons name="ios-search" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
  

// const moduleState = state => ({
//   filters: state.campings.filters,
//   loading: state.campings.loading
// });

// const moduleActions = {
//   setFilters
// };

// export default connect(moduleState, moduleActions)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.1,
    width: width,
    paddingHorizontal: 14
  },
  section: {
    flexDirection: "column",
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: "#EAEAED",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
    marginVertical: 14
  },
  group: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FF7657",
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    padding: 14,
    alignContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500"
  },
  active: {
    backgroundColor: "#FF7657"
  },
  activeText: {
    color: "#FFF"
  },
  first: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13
  },
  last: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13
  },
  option: {
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});