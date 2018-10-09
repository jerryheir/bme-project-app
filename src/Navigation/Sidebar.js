import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Icon } from 'native-base'
import { color } from '../Style/Color'

class SideBar extends PureComponent {
  handleNavigation = (location, data) => {
    this.props.navigation.navigate(location, { data })
  }

  render() {
    return (
      <SafeAreaView
        style={styles.sidebarContainer}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <TouchableOpacity
          style={styles.logoutItem}
          activeOpacity={1}
          onPress={() => this.handleNavigation('FirstList')}
        >
          <Icon
            name={'md-people'}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.logoutItem, { marginTop: 14 }]}
          activeOpacity={1}
          onPress={() => this.handleNavigation('About')}
        >
          <Icon
            name={'md-information-circle'}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>About Us</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default SideBar

const styles = StyleSheet.create({
  itemText: {
    flex: 1,
    alignContent: 'center',
    paddingLeft: 12,
    color: color.menu
  },
  itemIcon: {
    color: color.menu
  },
  logoutItem: {
    borderTopWidth: 1,
    borderColor: color.textBorderBottom,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  sidebarItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16
  },
  sidebarContainer: {
    paddingHorizontal: 8,
    height: Dimensions.get('window').height - 16
  },
  itemsContainer: {
    flex: 4
  }
})
