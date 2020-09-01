import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as basic from '../../basic';
import * as basicStyles from '../../basic/styles';
import { searchConnect, SearchReduxProps } from '../../../redux/connect/searchConnect';

interface HomeHeaderProps extends SearchReduxProps {
}

interface HomeHeaderState {
}

class HomeHeader extends React.Component<HomeHeaderProps, HomeHeaderState> {

  state: Readonly<HomeHeaderState> = {
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.account}>
        </View>
        <View style={styles.search}>
          <basic.SearchBar placeholder={'What do you want to eat?'}/>
        </View>
        <View style={styles.tabs}>
          <basic.CustomText label={this.props.searchValue} />
        </View>
      </View>
    );
  }
}

export default searchConnect(HomeHeader);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: basicStyles.ACCENT_BLUE,
  },
  account: {
    flex: 4,
  },
  search: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  tabs: {
    flex: 2,
  }
});
