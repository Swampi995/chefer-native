import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import * as basic from '../../basic';
import * as basicStyles from '../../basic/styles';
import IconEntypo from 'react-native-vector-icons/Entypo';

interface DishListProps {
}

class DishList extends React.Component<DishListProps> {

  render() {
    const DATA = [{ id: '1', image: 'https://reactnative.dev/img/tiny_logo.png', name: 'Yogurt', foodCategory: 'DAIRY' },
    { id: '2', image: 'https://reactnative.dev/img/tiny_logo.png', name: 'Cereal', foodCategory: 'OTHER' },
    { id: '3', image: 'https://reactnative.dev/img/tiny_logo.png', name: 'Bread', foodCategory: 'OTHER' },
    { id: '4', image: 'https://reactnative.dev/img/tiny_logo.png', name: 'Peanutbutter', foodCategory: 'OTHER' }];

    const Item = ({ item }) => {
      console.log(item)
      return (
        <View style={styles.itemList}>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.foodCategory}</Text>
            <IconEntypo name="stopwatch" size={25} color={basicStyles.TEXT_DARK}/>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.foodCategory}</Text>
            <IconEntypo name="stopwatch" size={25} color={basicStyles.TEXT_DARK}/>
          </View>
        </View>
      )
    }

    const renderItem = ({ item }) => (
      <Item item={item} />
    );

    return (
      <basic.Screen>
        <View style={styles.header}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </basic.Screen>
    );
  }
}

export default DishList;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: basicStyles.BACKGROUND_MEDIUM,
  },
  image: {
    width: 100,
    height: 100
  },
  itemList: {
    flex: 1,
    flexDirection:'row'
  },
  item: {
    flex: 1,
    backgroundColor: basicStyles.BACKGROUND_LIGHT,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: '45%',
  },
  name: {
    fontSize: 15,
  }
});
