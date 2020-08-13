import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import { carConnect, CarReduxProps } from '../../redux/connect/carConnect';
import * as notifications from '../../services/notifications';

interface HomeProps extends NavigationTabScreenProps, CarReduxProps {
}

interface HomeState {
}

class StatsScreen extends React.Component<HomeProps, HomeState> {

  state: Readonly<HomeState> = {
  }

  setNotification = async () => {
    const response = await notifications.setNotification();
    console.log(` ==== response ==== ${response}`)
  }

  render() {
    return (
      <basic.Screen>
        <View style={styles.header}>
          <basic.CustomText label={'HOME'} />
          <basic.PrimaryButton onPress={this.setNotification} />
        </View>
      </basic.Screen>
    );
  }
}

export default carConnect(StatsScreen);

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
});
