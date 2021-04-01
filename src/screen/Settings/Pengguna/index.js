import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, TouchableOpacity,  Alert } from 'react-native';
import { Container,Content,Icon } from 'native-base';
import SearchField from '@/component/Form/SearchField';
import HeaderMenu from '@/component/Main/Header';
import Text from '@/component/Text';
import { COLORS } from '@/commons/color';
import { PenggunaAction } from '@/store/action';
import Loading from '@/component/Loading';
import AddButton from '@/component/AddButton'; 
import { useNavigation, useIsFocused } from '@react-navigation/native';


export default function Pengguna(){
    const dispatch = useDispatch();
    const data = useSelector(state=> state.Pengguna.data);
    const loading = useSelector(state=> state.Pengguna.loading);
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    useEffect(()=>{
        dispatch(PenggunaAction.getPengguna());
    },[isFocused]);


    function onPressDelete(id){
        Alert.alert(
            'Konfirmasi',
            'Yakin Ingin Dihapus',
            [
              {text: 'Batal', style: 'cancel'},
              {text: 'Setuju', onPress: () => handleDelete(id)},
            ]
          );
    }

    async function handleDelete(id) {
        await dispatch(PenggunaAction.Delete(id));
        await dispatch(PenggunaAction.getPengguna());
    }
    function onAdd(){
        dispatch(PenggunaAction.resetForm());
        navigation.navigate('FormPengguna', { idPengguna:"", flag:"Tambah" })
    }

    function handleEdit(id){
       navigation.navigate('FormPengguna',{ idPengguna:id, flag:"Ubah" })
    }

    function handleSearch(event){
        dispatch(PenggunaAction.getPengguna(event))
    }

    function renderListPengguna(){
        return data.map((props, key)=>{
            return(
                <TouchableOpacity key = {key} onPress={()=>handleEdit(props.id)}>
                    <SafeAreaView style={styles.pengguna} >
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
                </TouchableOpacity>
            )
        })
    }

    return(
        <Container>
             <Loading value={loading}></Loading>
            <HeaderMenu title="Pengguna"></HeaderMenu>
            <Content style={{padding:10}}>
                <SearchField onChangeText={handleSearch}></SearchField>
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