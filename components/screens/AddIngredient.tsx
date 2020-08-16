import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import { carConnect, CarReduxProps } from '../../redux/connect/carConnect';
import * as notifications from '../../services/notifications';
import * as api from '../../services/api';

interface AddIngredientScreenProps extends NavigationTabScreenProps, CarReduxProps {
}

class AddIngredientScreen extends React.Component<AddIngredientScreenProps> {
  state = {
    name: '',
    price: ''
 }
 handleName = (text) => {
    this.setState({ name: text })
 }
 handlePrice = (text) => {
    this.setState({ price: text })
 }
 addIngredient = (name, pass) => {
    alert('name: ' + name + ' price: ' + pass)
 }

 render() {
    return (
      <basic.Screen>
       <View style = {styles.header}>
       <basic.CustomText label={'AddIngredient'} />
          <TextInput style = {styles.input}
             placeholder = "Ingredient Name"
             placeholderTextColor = "lightgray"
             autoCapitalize = "none"
             onChangeText = {this.handleName}/>
          
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Ingredient Price"
             placeholderTextColor = "lightgray"
             autoCapitalize = "none"
             onChangeText = {this.handlePrice}/>
          
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.addIngredient(this.state.name, this.state.price)
             }>
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
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