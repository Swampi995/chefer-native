import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../../basic';
import * as basicStyles from '../../basic/styles';
import { carConnect, CarReduxProps } from '../../../redux/connect/carConnect';

interface DishListProps extends NavigationTabScreenProps, CarReduxProps {
}

class DishList extends React.Component<DishListProps> {

  render() {
    return (
      <basic.Screen>
        <View style={styles.header}>
          <basic.CustomText label={'Dish list'} />
        </View>
      </basic.Screen>
    );
  }
}

export default carConnect(DishList);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: basicStyles.ACCENT_GREEN,
  },
});
