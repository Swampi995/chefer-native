import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { searchConnect, SearchReduxProps } from '../../redux/connect/searchConnect';

interface BasicTextInputProps extends SearchReduxProps {
  placeholder?: string;
}

class SearchBar extends React.Component<BasicTextInputProps> {

  changeSearchValue = (value: string) => {
    this.props.setSearchValue(value);
  }

  render() {
    const { searchValue } = this.props;
    return (
      <View style={styles.container}>
        <Feather name="search" size={30} style={styles.searchIcon} />
        <TextInput style={styles.input} onChangeText={this.changeSearchValue}
          value={searchValue} autoCorrect={false} autoCapitalize={'none'}
          autoCompleteType={'off'} />
      </View>
    )
  }
}

export default searchConnect(SearchBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 15,
    alignItems: 'center',
    height: 30,
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    color: '#8796d6',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    height: 30,
  }
});
