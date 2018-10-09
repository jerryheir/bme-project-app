import React from 'react'
import {
    createStackNavigator,
    createDrawerNavigator
  } from 'react-navigation';
import { Icon } from 'native-base'

import InnerFirstScreen from '../Screen/InnerFirstScreen'
import Sidebar from './Sidebar'
import { color } from './../Style/Color'
import FirstListScreen from '../Screen/FirstListScreen';
import InnerEquipmentScreen from '../Screen/InnerEquipmentScreen';
import AboutScreen from '../Screen/AboutScreen';

const mainStack = createStackNavigator(
  {
    FirstList: {
        screen: FirstListScreen
    },
    InnerFirst: {
      screen: InnerFirstScreen
    },
    InnerEquipment: {
        screen: InnerEquipmentScreen
    },
    About: {
        screen: AboutScreen
    }
  },
  {
    initialRouteName: 'FirstList',
    navigationOptions: ({ navigation }) => ({
      title: 'Bio-Medical Guide',
      headerLeft: (
        <Icon
          name={'menu'}
          onPress={() => navigation.toggleDrawer()}
          style={{ color: color.secondary, paddingLeft: 16 }}
        />
      ),
      headerTintColor: color.secondary,
      headerStyle: {
        backgroundColor: color.primary
      }
    })
  }
)

const drawerStack = createDrawerNavigator(
  {
    Home: mainStack
  },
  {
    initialRouteName: 'Home',
    contentComponent: (props) => <Sidebar {...props} />,
    contentOptions: {
      activeTintColor: color.secondary,
      activeBackgroundColor: color.primary,
      inactiveTintColor: color.primary
    }
  }
)

export default drawerStack
