import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import { carConnect, CarReduxProps } from '../../redux/connect/carConnect';
import * as notifications from '../../services/notifications';
import * as api from '../../services/api';

interface AddIngredientScreenProps extends NavigationTabScreenProps, CarReduxProps {
}

class AddIngredientScreen extends React.Component<AddIngredientScreenProps> {

  render() {
    return (
      <basic.Screen>
        <View style={styles.header}>
          <basic.CustomText label={'AddIngredient'} />
        </View>
      </basic.Screen>
    );
  }
}

export default carConnect(AddIngredientScreen);

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
});