import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { color } from '../Style/Color';

export default class AboutScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
        <Text style={{ color: color.primary, fontSize: 24, padding: 21, paddingTop: 40 }}>About Us</Text>
            <View style={{ width: '90%' , alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                <Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Benjamin Nwandu</Text> and
                <Text style={{ fontWeight: 'bold', fontSize: 18}} >Chinenye Oyiogu</Text> are students of Federal University of Technology, Owerri, from the department of Biomedical Technology of which they are passionate about programming and their zeal to make an ap which would make things easier in relation to Biomedical equipment and their maintenance came into consideration and are still passionate to move on with the development in the near future...
                </Text>
            </View>

            <TouchableOpacity style={{ alignSelf: 'center', marginTop: 70, alignItems: 'center', justifyContent: 'center', backgroundColor: color.primary, height: 50, width: '85%', borderRadius: 5 }} onPress={()=> this.props.navigation.navigate('FirstList')}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20}}>GO BACK TO APP</Text>
            </TouchableOpacity>
        </View>
    );
  }
}