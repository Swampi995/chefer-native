import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';
import { NAVIGATION_ROUTES } from './constants';
import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as basicStyle from '../basic/styles';
import SettingsScreen from '../screens/Settings';

const AppNavigator = createMaterialTopTabNavigator(
  {
    [NAVIGATION_ROUTES.HOME.route]: {
      screen: HomeScreen,
      navigationOptions: {
        title: NAVIGATION_ROUTES.HOME.displayName,
        tabBarIcon: ({ tintColor }) =>
          <IconEntypo name="stopwatch" size={25} color={tintColor}/>
      },
    },
    [NAVIGATION_ROUTES.SETTINGS.route]: {
      screen: SettingsScreen,
      navigationOptions: {
        title: NAVIGATION_ROUTES.SETTINGS.displayName,
        tabBarIcon: ({ tintColor }) =>
          <MaterialCommunityIcons name="settings" size={27} color={tintColor}/>
      },
    },
  },
  {
    initialRouteName: NAVIGATION_ROUTES.HOME.route,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      allowFontScaling: false,
      activeTintColor: basicStyle.TEXT_LIGHT,
      inactiveTintColor: basicStyle.TEXT_DARK,
      iconStyle: {
        height: 30,
        width: 30,
      },
      indicatorStyle: {
        backgroundColor: basicStyle.BACKGROUND_DARK,
      },
      style: {
        backgroundColor: basicStyle.BACKGROUND_DARK,
      }
    },
  }
);

export default createAppContainer(AppNavigator);
