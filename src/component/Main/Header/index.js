import React from 'react';
import { Header, Left, Right, Body } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../../Text';
import { COLORS } from '@/commons/color';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function HeaderMenu(props){
    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }
    return(
        <Header style={{backgroundColor:"white"}} androidStatusBarColor='#F33643'>
            <Left>
                <Text style={{width:400,color:'black',fontSize:20}}>{props.title}</Text>
            </Left>
            <Body></Body>
            <Right>
                <TouchableOpacity onPress={goBack}>
                   <Icon name="return-up-back-sharp" style={styles.icon}></Icon>
                </TouchableOpacity>
              
          </Right>
        </Header>
    )
}

const styles = StyleSheet.create({
    icon:{
        fontSize:30,
        color:COLORS.primary
    }
})