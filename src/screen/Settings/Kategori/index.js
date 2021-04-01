import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, TouchableOpacity,  Alert } from 'react-native';
import { Container,Content,Icon } from 'native-base';
import SearchField from '@/component/Form/SearchField';
import HeaderMenu from '@/component/Main/Header';
import Text from '@/component/Text';
import { COLORS } from '@/commons/color';
import { KategoriAction } from '@/store/action';
import Loading from '@/component/Loading';
import AddButton from '@/component/AddButton'; 
import { useNavigation, useIsFocused } from '@react-navigation/native';


export default function Kategori(){
    const dispatch = useDispatch();
    const data = useSelector(state=> state.Kategori.data);
    const loading = useSelector(state=> state.Kategori.loading);
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    useEffect(()=>{
        dispatch(KategoriAction.getData());
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
        await dispatch(KategoriAction.Delete(id));
        await dispatch(KategoriAction.getData());
    }
    async function onAdd(){
        await dispatch(KategoriAction.resetForm());
        navigation.navigate('FormKategori', { idKategori:"", flag:"Tambah" })
    }

    function handleEdit(id){
       navigation.navigate('FormKategori',{ idKategori:id, flag:"Ubah" })
    }

    function handleSearch(event){
        dispatch(KategoriAction.getData(event))
    }

    function renderList(){
        return data.map((props, key)=>{
            return(
                <TouchableOpacity key = {key} onPress={()=>handleEdit(props.id)}>
                    <SafeAreaView style={styles.card} >
                    <SafeAreaView style={styles.keterangan}>
                    <Text style={styles.text}> { props.kategori}</Text>
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
            <HeaderMenu title="Kategori Barang"></HeaderMenu>
            <Content style={{padding:10}}>
                <SearchField onChangeText={handleSearch}></SearchField>
                {
                    data.length > 0 ? renderList() : null
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
        fontSize:20
   },
   card:{
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