import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as basic from '../../basic';
import * as basicStyles from '../../basic/styles';

interface DishListProps {
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

export default DishList;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: basicStyles.ACCENT_GREEN,
  },
});
