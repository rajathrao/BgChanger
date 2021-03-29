import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomcolor: null
    }
  }
  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor((Math.random() * 256)) + "," +
      Math.floor((Math.random() * 256)) + "," +
      Math.floor((Math.random() * 256)) + ")"
    );
  }
  myButtonPressed = () => {
    this.setState({ randomcolor: this.getRandomColor() })
  }

  render() {
    return (

      <View style={[styles.container, { backgroundColor: this.state.randomcolor }]}>
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text style={[styles.text, { backgroundColor: this.getRandomColor() }]}>Login </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",


  }
});
