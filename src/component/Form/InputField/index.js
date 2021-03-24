import React from 'react';
import {  Item, Input } from 'native-base';
import Text from '../../Text';
import { View, StyleSheet } from 'react-native';
export default function InputField(props){
    return(
        <View style={props.style}>
        {
            props.fieldLabel && 
            <Text style={styles.label}>
                {props.fieldLabel}
             </Text>
        }
        
        <Item rounded style={[ styles.defaultInput, props.error && styles.error ]}>
            <Input secureTextEntry={props.type=='password' ? true : false} placeholder={props.placeholder} onChangeText={props.onChangeText} name={props.name} value={props.value ? props.value.toString(): null}  keyboardType={props.keyboardType}/>
          </Item>
          {
              props.error &&
              <Text style={styles.errorLabel}>{ props.errorText ? props.errorText : 'Harap di isi'}</Text>
          }
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:16,
        marginLeft:10
    },
    errorLabel:{
        fontSize:16,
        marginLeft:10,
        fontWeight:'bold',
        color:'red'
    },  
    defaultInput:{
       borderRadius:12
    },
    error:{
        borderColor:'red',
    }
})