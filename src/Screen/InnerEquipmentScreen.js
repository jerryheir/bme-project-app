import React from 'react';
// import { View, Text } from "react-native";
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import InnerEquipContent from "../Components/InnerEquipContent";

export default class InnerEquipmentScreen extends React.Component {
  render() {
    const name = this.props.navigation.getParam('item', 'Nothing was sent');
    return (
        <ScrollView>
            <InnerEquipContent name={name} /*navigation={this.props.navigation}*/ />
        </ScrollView>
    );
  }
}
