import React from 'react'
import { FlatList, ScrollView, View, Text } from "react-native";
import FirstListAtom from "../Atom/FirstListAtom";
import { topic } from "../config/data";

export default class FirstList extends React.Component {
    onPress = ( data ) => {
        this.props.navigation.navigate('InnerFirst', { item: data })
    }
    renderItem = ({ item }) => {
        return <FirstListAtom topic={item} onPress={() => this.props.navigation.navigate('InnerFirst', { item: item.name })} />
    }
  render() {
    return (
        <View style={{ backgroundColor: "#FFF" }}>
            <View style={{height: 40, width: '100%', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: 'darkgrey', fontWeight: 'bold'}}>Home</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={topic}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.key.toString()}
                    style={{marginBottom: 50}}
                />
            </ScrollView>
        </View>
    );
  }
}