import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import AddIngredientScreen from '../screens/AddIngredient';
import { createDrawerNavigator } from '@react-navigation/drawer'; 

const Drawer = createDrawerNavigator();

export default function BurgerMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Add Ingredient" component={AddIngredientScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
