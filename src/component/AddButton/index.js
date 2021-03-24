import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { COLORS } from '@/commons/color';

export default function AddButton(props){
    return(
        <TouchableOpacity
        onPress={ props.onPress }
        style={styles.button}
        >
        <Icon name="add" style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        position:'absolute',
        bottom:10,
        backgroundColor:COLORS.primary,
        borderRadius:50,
        padding:20,
        right:10
    },
    icon:{
        color:'white', 
        fontSize:30
    }
})