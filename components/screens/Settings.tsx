import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';

interface SettingsScreenProps extends NavigationTabScreenProps {
}

class SettingsScreen extends React.Component<SettingsScreenProps> {

  render() {
    return (
      <basic.Screen>
        <View style={styles.header}>
          <basic.CustomText label={'SETTINGS'} />
        </View>
      </basic.Screen>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
});
