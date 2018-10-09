import React from 'react';
import { View } from "react-native";
import FirstList from "../Components/FirstList";

export default class FirstListScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <FirstList navigation={this.props.navigation} />
        </View>
    );
  }
}

