import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';
import AddIngredientScreen from '../screens/AddIngredient';
import { NAVIGATION_ROUTES } from './constants';
import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as basicStyle from '../basic/styles';
import SettingsScreen from '../screens/DishDetails';

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
    [NAVIGATION_ROUTES.DISHDETAILS.route]: {
      screen: SettingsScreen,
      navigationOptions: {
        title: NAVIGATION_ROUTES.DISHDETAILS.displayName,
        tabBarIcon: ({ tintColor }) =>
          <MaterialCommunityIcons name="settings" size={27} color={tintColor}/>
      },
    },
    [NAVIGATION_ROUTES.ADDINGREDIENT.route]: {
      screen: AddIngredientScreen,
      navigationOptions: {
        title: NAVIGATION_ROUTES.ADDINGREDIENT.displayName,
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
      activeTintColor: basicStyle.TEXT_DARK,
      inactiveTintColor: basicStyle.TEXT_LIGHT,
      iconStyle: {
        height: 30,
        width: 30,
      },
      indicatorStyle: {
        backgroundColor: basicStyle.BACKGROUND_LIGHT,
      },
      style: {
        backgroundColor: basicStyle.BACKGROUND_LIGHT,
      }
    },
  }
);

export default createAppContainer(AppNavigator);
