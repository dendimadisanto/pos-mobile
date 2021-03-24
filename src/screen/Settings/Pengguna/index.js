import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, TouchableOpacity,  Alert } from 'react-native';
import { Container,Content,Icon } from 'native-base';
import SearchField from '@/component/Form/SearchField';
import HeaderMenu from '@/component/Main/Header';
import Text from '@/component/Text';
import { COLORS } from '@/commons/color';
import { PenggunaAction } from '@/config/store/action';
import Loading from '@/component/Loading';
import AddButton from '@/component/AddButton'; 
import { useNavigation } from '@react-navigation/native';

export default function Pengguna(){
    const dispatch = useDispatch();
    const data = useSelector(state=> state.Pengguna.data);
    const loading = useSelector(state=> state.Pengguna.loading);
    const navigation = useNavigation();

    useEffect(()=>{
        dispatch(PenggunaAction.getPengguna());
    },[]);


    function onPressDelete(id){
        Alert.alert(
            'Konfirmasi',
            'Yakin Ingin Dihapus',
            [
              {text: 'Batal', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
              {text: 'Setuju', onPress: () => console.warn(id)},
            ]
          );
    }

    function onAdd(){
        navigation.navigate('FormPengguna')
    }
    function renderListPengguna(){
        return data.map((props, key)=>{
            return(
                <SafeAreaView style={styles.pengguna} key = {key}>
                    <SafeAreaView style={styles.keterangan}>
                    <Icon name="person-outline" style={styles.icon} />
                    </SafeAreaView>
                    <SafeAreaView style={styles.keterangan}>
                    <Text style={styles.text}> { props.username }</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.keterangan}>
                        <TouchableOpacity>  
                            <Icon name="trash-outline" style={styles.icon} onPress={ () => onPressDelete(props.id)}/>
                        </TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>
                
            )
        })
    }

    return(
        <Container>
             <Loading value={loading}></Loading>
            <HeaderMenu title="Pengguna"></HeaderMenu>
            <Content style={{padding:10}}>
                <SearchField></SearchField>
                {
                    data.length > 0 ? renderListPengguna() : null
                }
            </Content>
             <AddButton onPress={onAdd}></AddButton>
        </Container>
        
    )
}

const styles = StyleSheet.create({
   search:{
       alignItems:'center',
       marginTop:10
   },
   icon:{
        color:COLORS.primary,
        fontSize:35
   },   
   text:{
        color:COLORS.primary,
        fontSize:18
   },
   pengguna:{
       marginTop:20,
       height :100,
       borderRadius:12,
       borderWidth:1,
       borderColor:'#0000',
       backgroundColor:'white',
       elevation: 1,
       display:'flex',
       flexDirection:'row'
   },
   keterangan:{
     flex:1,
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     flexDirection:'column'
   }
})