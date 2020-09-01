import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import * as api from '../../services/api';
import DishList from './home/DishList';
import HomeHeader from './home/HomeHeader';

interface HomeProps extends NavigationTabScreenProps {
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
    // this.fetchAsync();
  }

  fetchAsync = async () => {
    const reponse = await api.getIngredient();
    this.setState({ ingredient: reponse });
  }

  render() {
    const { ingredient } = this.state;
    return (
      <basic.Screen>
        <View style={styles.header}>
          <HomeHeader />
          {ingredient && <Image style={{ width: 150, height: 150 }}
            source={{ uri: `data:image/gif;base64,${ingredient.imageBase64}` }} />}
        </View>
        <View style={styles.list}>
          <DishList />
        </View>
      </basic.Screen>
    );
  }
}

export default StatsScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
