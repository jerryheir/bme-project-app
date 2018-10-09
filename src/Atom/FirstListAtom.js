import * as React from 'react'
import { ListItem, Text } from 'native-base'
import { StyleSheet, View, Dimensions } from 'react-native'
import ElevatedView from 'fiber-react-native-elevated-view'
import { color } from '../Style/Color';

class FirstListAtom extends React.Component {
  render() {
    return (
      <ListItem style={styles.row} onLongPress={this.props.onLongPress}>
      <ElevatedView
          style={{
            backgroundColor: color.primary,
            padding: 16,
            borderRadius: 4,
            height: 80,
            width: Dimensions.get('window').width - 32,
            alignSelf: 'center',
            marginLeft: 16
          }}
          elevation={10}
          elevationColor="#00A4D3"
          feedbackEnabled
          activeElevation={1}
          onPress={this.props.onPress}
        >
            <View>
                <Text style={{ fontWeight: 'bold'}}>{this.props.topic.name}</Text>
            </View>
        </ElevatedView>
      </ListItem>
    )
  }
}

export default FirstListAtom

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
