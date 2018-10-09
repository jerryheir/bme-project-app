import React from 'react';
import { View, Text } from "react-native";
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import InnerContent from "../Components/InnerContent";

export default class InnerFirstScreen extends React.Component {
  render() {
      const name = this.props.navigation.getParam('item', 'Nothing was sent');
    return (
        <ScrollView>
            <InnerContent name={name} navigation={this.props.navigation} />
        </ScrollView>
    );
  }
}

