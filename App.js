import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from "./src/Navigation/Routes";

export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Routes />
        </View>
    );
  }
}