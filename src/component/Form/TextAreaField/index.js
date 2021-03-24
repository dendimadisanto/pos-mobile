import React from 'react';
import { Textarea } from 'native-base';
import { StyleSheet, View } from 'react-native';
import Text from '@/component/Text';

export default function TextAreaField(props){
    return(
        <View>
            { props.fieldLabel && 
            <Text style={styles.label}>
                {props.fieldLabel}
             </Text>
            }   
             <Textarea style={[styles.default, props.style]} onChangeText={props.onChangeText} rowSpan={5} bordered placeholder={props.placeholder} name={props.name} value={props.value} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    default:{
        borderRadius:10
    }
})