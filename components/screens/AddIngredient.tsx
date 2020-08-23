import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import { carConnect, CarReduxProps } from '../../redux/connect/carConnect';
import * as api from '../../services/api';

interface AddIngredientScreenProps extends NavigationTabScreenProps, CarReduxProps {
}

interface AddIngredientState {
  name: string;
  price: string;
  ingredient: api.IngrediendProps;
  measurementUnit: api.QuantifiedIngrediendProps['measurementUnit'],
  amount: number,
}

class AddIngredientScreen extends React.Component<AddIngredientScreenProps> {
  state: Readonly<AddIngredientState> = {
    name: '',
    price: '',
    ingredient: null,
    measurementUnit: 'G',
    amount: 192,
 }

 handler = (type: keyof AddIngredientState) => (value: string) => {
   this.setState({ [type]: value });
 }

 addIngredient = async () => {
   const ingredient = await api.addIngredient(this.state.name, parseInt(this.state.price, 10));
   this.setState({ ingredient });
 }

 addQuantifiedIngredient = () => {
   if (!this.state.ingredient) {
     alert('Add an ingredient first!');
   } else {
     api.addQuantifiedIngredient(this.state.ingredient, this.state.amount, this.state.measurementUnit);
   }
 }

 render() {
   const { ingredient } = this.state;
    return (
      <basic.Screen>
       <View style = {styles.header}>
       <basic.CustomText label={'AddIngredient'} />
          <TextInput style = {styles.input}
             placeholder = "Ingredient Name"
             placeholderTextColor = "lightgray"
             autoCapitalize = "none"
             value={this.state.name}
             onChangeText = {this.handler('name')}/>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Ingredient Price"
             placeholderTextColor = "lightgray"
             autoCapitalize = "none"
             value={this.state.price}
             onChangeText = {this.handler('price')}/>
        </View>
        <View>
          <basic.CustomText label={ingredient && ingredient.id} />
          <basic.CustomText label={ingredient && ingredient.name} />
          <basic.CustomText label={ingredient && ingredient.price} />
          <basic.Button onPress={this.addQuantifiedIngredient} label={'Add Ingredient'}/>
        </View>
      </basic.Screen>
    )
 }
}

export default carConnect(AddIngredientScreen);

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: 'center',
    marginBottom: 30,
    padding: 20
  },
  input: {
    textAlign:'left',
    color: 'grey',
    marginBottom:10,
    borderBottomColor: 'gray',
    borderBottomWidth:1,
    width:'100%',
    margin: 10
    },
  submitButtonText:{
    color: 'white',
    textAlign: 'center'
  },
  submitButton:{
    width: '50%',
    backgroundColor: 'grey',
    borderRadius: 5
  }
});
