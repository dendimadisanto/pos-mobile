import React, { useEffect } from 'react';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import InputField from '@/component/Form/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { InformasiTokoAction } from '@/config/store/action';
import { StyleSheet } from 'react-native';
import ButtonAction from '@/component/Form/Button';
import TextAreaField from '@/component/Form/TextAreaField';
import Loading from '@/component/Loading';
import { useNavigation } from '@react-navigation/native';

export default function InformasiToko(){
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const formData = useSelector(state=> state.InformasiToko.form);
    const loading = useSelector(state=> state.InformasiToko.loading);

    useEffect(()=>{
        dispatch(InformasiTokoAction.getShopInformation());
    },[]);

    return(
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title=" Informasi Toko"></HeaderMenu>
            <Content>
                <Form style={{padding:10}}>
                    <InputField fieldLabel="Nama Toko" placeholder="Nama Toko" onChangeText={handleChangeToko} style={styles.field} name="toko" value={formData.nama_toko}></InputField>
                    <InputField fieldLabel="No Telepon Toko" placeholder="No Telepon Toko" keyboardType="numeric" style={styles.field} onChangeText={handleChangeTelp} value={formData.telp}></InputField>
                    <InputField fieldLabel="Email Toko" placeholder="Email Toko" style={styles.field} value={formData.email} onChangeText={handleChangeEmail}></InputField>
                    <TextAreaField fieldLabel="Alamat Toko" placeholder="Alamat Toko" style={styles.field} onChangeText={handleChangeAlamat} value={formData.alamat}></TextAreaField>
                    <InputField keyboardType="numeric" fieldLabel="PPN" placeholder="PPN" style={styles.field} onChangeText={handleChangePpn} value={formData.ppn}></InputField>
                    <ButtonAction text="Simpan" style={styles.button} onPress={handleStore}></ButtonAction>
                </Form>
            </Content>
        </Container>
    );

    function handleChangeToko(event = {}){
      dispatch(InformasiTokoAction.setForm({...formData,nama_toko:event}));
    }

    function handleChangeTelp(event = {}){
        dispatch(InformasiTokoAction.setForm({...formData,telp:event}));
    }

    function handleChangeEmail(event = {}){
        dispatch(InformasiTokoAction.setForm({...formData,email:event}));
    }

    function handleChangeAlamat(event = {}){
        dispatch(InformasiTokoAction.setForm({...formData,alamat:event}));
    }

    function handleChangePpn(event = {}){
        dispatch(InformasiTokoAction.setForm({...formData,ppn:event}));
    }
   
    async function handleStore(){
        await dispatch(InformasiTokoAction.Update(formData));
        navigation.goBack();
    }
}

const styles = StyleSheet.create({
    field:{
        marginBottom:20
    },
    button:{
        height:50,
        width:'100%'
    }
});