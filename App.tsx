import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './components/Main';
import * as basicStyle from './components/basic/styles';
import reducers from './redux/reducers';
import AppNavigator from './components/navigation/AppNavigation';

interface AppProps {
}

interface AppState {
  fontLoaded: boolean;
}

const store = createStore(reducers);

export default class App extends React.Component<AppProps, AppState> {

  state: Readonly<AppState> = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {

    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: basicStyle.BACKGROUND_LIGHT }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: basicStyle.BACKGROUND_LIGHT }}>
          <View style={styles.container}>
            <Provider store={store}>
              <Main />
              {this.state.fontLoaded && <AppNavigator/>}
            </Provider>
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
