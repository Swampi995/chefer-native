import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import { carConnect, CarReduxProps } from '../../redux/connect/carConnect';
import * as api from '../../services/api';
import DishList from './home/DishList';

interface HomeProps extends NavigationTabScreenProps, CarReduxProps {
}

interface HomeState {
  ingredient: api.IngrediendProps;
}

class StatsScreen extends React.Component<HomeProps, HomeState> {

  state: Readonly<HomeState> = {
    ingredient: null,
  }

  // setNotification = async () => {
  //   const response = await notifications.setNotification();
  //   console.log(` ==== response ==== ${response}`)
  // }

  componentDidMount() {
    this.fetchAsync();
  }

  fetchAsync = async () => {
    const reponse = await api.getIngredient();
    console.log(reponse);
    this.setState({ ingredient: reponse });
  }

  render() {

    return (
      <basic.Screen>
        <View style={styles.header}>
          <basic.CustomText label={'HOME'} />
          {/*<basic.PrimaryButton onPress={this.setNotification} />*/}
          <basic.CustomText label={this.state.ingredient && this.state.ingredient.name} />
          <basic.CustomText label={this.state.ingredient && this.state.ingredient.id} />
          <basic.CustomText label={this.state.ingredient && this.state.ingredient.price} />
        </View>
        <View style={styles.list}>
          <DishList />
        </View>
      </basic.Screen>
    );
  }
}

export default carConnect(StatsScreen);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});
