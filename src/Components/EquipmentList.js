import React from 'react'
import { FlatList, ScrollView, View } from "react-native";
import EquipmentListAtom from "../Atom/EquipmentListAtom";
import device from "../config/data";

export default class EquipmentList extends React.Component {
    renderItem = ({ item }) => {
        return (
        <EquipmentListAtom 
            topic={item} 
            onPress={() => {
                this.props.navigation.navigate('InnerEquipment', { item: item.device })}
            } 
        />
        );
    }
  render() {
    return (
            <FlatList
                data={device}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.key.toString()}
                style={{marginBottom: 50}}
            />
    );
  }
}