import React from 'react';
import { StyleSheet } from 'react-native';
import {Icon, Input, Item } from 'native-base';
import { COLORS } from '@/commons/color';

export default function SearchField(props){
    return(
        <Item rounded style={[styles.default, props.style]}>
            <Input placeholder='Pencarian' style={{marginLeft:10}} onChangeText={props.onChangeText}/>
            <Icon name="search" size={30} style={{color:COLORS.primary}} />
        </Item>
        
    )
}

const styles = StyleSheet.create({
    default:{
        borderColor:COLORS.primary,
        borderRadius:12
    }
})