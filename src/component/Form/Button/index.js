import React from 'react';
import { Button } from 'native-base';
import Text from '@/component/Text';
import { StyleSheet } from 'react-native';
import { COLORS } from '@/commons/color';


export default function ButtonAction(props){
    return(
        <Button style={[props.style, styles.default]} onPress={props.onPress}>
            <Text  style={styles.text}>{props.text}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    default:{   
        justifyContent:'center',
        backgroundColor:COLORS.primary,
        borderRadius:10
    },
    text:{
        color:'white',
        fontSize:15
    }
})