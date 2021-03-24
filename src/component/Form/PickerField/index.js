import React  from 'react';
import { StyleSheet, View } from 'react-native';
import {Icon } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import Text from '@/component/Text';

export default function PickerField(props){
    return(
        <View style={props.style}>
        {
            props.fieldLabel && 
            <Text style={styles.label}>
                {props.fieldLabel}
             </Text>
        }
        
        <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={props.onValueChange}
            style={props.error ? pickerSelectStylesError : pickerSelectStyles}
            items={props.items ? props.items : []}
            value={props.value}
            Icon={() => {
                return <Icon name="chevron-down-outline" style={{right:10, top:10}} />;
            }}
        />
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
 })

 const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.2,
        borderColor: 'grey',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30,
    },
  });

  const pickerSelectStylesError = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.8,
        borderColor: 'red',
        borderRadius: 12,
        color: 'black',
        paddingRight: 30,
    },
  });