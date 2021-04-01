import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, TouchableOpacity,  Alert } from 'react-native';
import { Container,Content,Icon, Footer } from 'native-base';
import SearchField from '@/component/Form/SearchField';
import HeaderMenu from '@/component/Main/Header';
import Text from '@/component/Text';
import { COLORS } from '@/commons/color';
import { BarangAction } from '@/store/action';
import Loading from '@/component/Loading';
import AddButton from '@/component/AddButton'; 
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BarcodeScanner from '@/component/BarcodeScanner';
export default function Barang(){
  const [scan, setSCan ] = useState(false)

  const dispatch = useDispatch();
  const data = useSelector(state=> state.Barang.data);
  const loading = useSelector(state=> state.Barang.loading);
  const navigation = useNavigation();
  const isFocused = useIsFocused();


  useEffect(()=>{
      dispatch(BarangAction.getData());
  },[isFocused]);

  function onScanned(e){
    setSCan(e);
}

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
      await dispatch(BarangAction.Delete(id));
      await dispatch(BarangAction.getData());
  }
  async function onAdd(){
      await dispatch(BarangAction.resetForm());
      navigation.navigate('FormBarang', { idBarang:"", flag:"Tambah" })
  }

  function handleEdit(id){
     navigation.navigate('FormBarang',{ idBarang:id, flag:"Ubah" })
  }

  function handleSearch(event){
      dispatch(BarangAction.getData(event))
  }

  function renderList(){
      return data.map((props, key)=>{
          return(
              <TouchableOpacity key = {key} onPress={()=>handleEdit(props.id)}>
                  <SafeAreaView style={styles.card} >
                  <SafeAreaView style={styles.keterangan}>
                  <Text style={styles.text}> { props.nama}</Text>
                  </SafeAreaView>
                  <SafeAreaView style={styles.button_hapus}>
                      <TouchableOpacity>  
                          <Icon name="trash-outline" style={styles.icon} onPress={ () => onPressDelete(props.id)}/>
                      </TouchableOpacity>
                  </SafeAreaView>
              </SafeAreaView>
              </TouchableOpacity>
          )
      })
  }

  return scan ? (
      <BarcodeScanner onScanned={onScanned}>
        <SafeAreaView style={[styles.overlay, styles.bottomOverlay]}>
          <Button
            onPress={() => { setSCan(false) }}
            style={styles.enterBarcodeManualButton}
            title="Enter Barcode"
           />
	      </SafeAreaView>
      </BarcodeScanner>
  ):
  (
    <Container>
    <Loading value={loading}></Loading>
    <HeaderMenu title="Daftar Barang"></HeaderMenu>
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
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
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
button_hapus:{
  flex:1,
  display:'flex',
  alignItems:'flex-end',
  justifyContent:'center',
  flexDirection:'column',
  marginRight:30,
  marginLeft:30
},
keterangan:{
 flex:2,
 display:'flex',
 alignItems:'flex-end',
 justifyContent:'center',
 flexDirection:'column',
 marginRight:30,
 marginLeft:30
}
})