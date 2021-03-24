import React from 'react';
import { Header, Left, Right, Body } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../../Text';
import COLORS from '@/commons/color';
import { useNavigation } from '@react-navigation/native';

export default function HeaderMenu(props){
    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }
    return(
        <Header style={{backgroundColor:"white"}} androidStatusBarColor='#F33643'>
            <Left>
                <Text style={{width:200,color:'black',fontSize:20}}>{props.title}</Text>
            </Left>
            <Body></Body>
            <Right>
                <TouchableOpacity onPress={goBack}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('../../../asset/icon/back.png')}
                    />
                </TouchableOpacity>
              
          </Right>
        </Header>
    )
}

const styles = StyleSheet.create({
    tinyLogo:{
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    }
})