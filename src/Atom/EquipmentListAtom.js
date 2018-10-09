import * as React from 'react'
import { ListItem, Text } from 'native-base'
import { StyleSheet, View, Dimensions, Image } from 'react-native'
import ElevatedView from 'fiber-react-native-elevated-view'
import { color } from '../Style/Color';

class EquipmentListAtom extends React.Component {
  render() {
      const { image, device } = this.props.topic
    return (
      <ElevatedView
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 4,
            height: 320,
            width: Dimensions.get('window').width - 70,
            alignSelf: 'center',
            marginLeft: 2,
            marginBottom: 10,
            borderColor: color.primary,
            borderWidth: 1
          }}
          elevation={7}
          elevationColor="#00A4D3"
          feedbackEnabled
          activeElevation={1}
          onPress={this.props.onPress}
        >
            <View style={{ alignSelf: "center"}}>
                <Image 
                source={image}
                style={{ width: 150, alignSelf:"center", height: 150, margin: 20, marginBottom: 40 }}
                // resizeMode="contain"
                />
                <View style={{}}>
                    <Text style={{ 
                        fontWeight: "bold", 
                        padding: 8, 
                        fontSize: 24
                        }}
                    >{device}</Text>
                </View>
            </View>
        </ElevatedView>
    )
  }
}

export default EquipmentListAtom

const styles = StyleSheet.create({
  row: {
    flex: 1,
    height: 120,
    paddingLeft: 0,
    marginLeft: 0,
    backgroundColor: 'white',
    marginBottom: 0.5,
  },
  rowText3P: {
    color: '#B10000',
    fontSize: 13,
    textAlign: 'right',
    paddingRight: 5,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 15
  },
  rowText1: {
    fontWeight: '400',
    fontSize: 13,
    textAlign: 'left'
  },
  leftView: {
    height: 55
  },
  bodyView: {
    flex: 3
  },
  dpP: {
    height: 55,
    width: 55,
    marginTop: 0,
    paddingTop: 0,
    borderRadius: 55 / 2,
    margin: 8,
    paddingLeft: 8
  },
  rightView: {
    alignSelf: 'flex-end',
    alignItems: 'center'
  }
})