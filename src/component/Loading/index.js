import React from 'react';
import {  ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loading(props){
    return(
        <>
        {
            props.value && 
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator />
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        }
         
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'rgba(52, 52, 52, 0.3)',
        zIndex:1000

    }
});