import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import  { COLORS } from '../../commons/color'

export default class Login extends Component {
  onPress = ()=>{
    this.props.navigation.navigate('Home');
  }

  render(){
    return(
      <View style={styles.container}>

          <View style={styles.inputView} >
              <TextInput  
                placeholder="Username"
                placeholderTextColor="black"
                style={styles.inputText}/>
          </View>
          <View style={styles.inputView} >
              <TextInput  
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.inputText}/>
          </View>
          <TouchableOpacity style = {styles.loginBtn} onPress={this.onPress}>

           <Text style = {styles.loginText} > LOGIN </Text>

         </TouchableOpacity>

    </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputView:{
    width:"80%",
    backgroundColor:"#F7F7F7",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10

  },
  loginText : {
    color: "white"
  }
})
