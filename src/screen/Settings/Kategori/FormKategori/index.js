import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import InputField from '@/component/Form/InputField';
import ButtonAction from '@/component/Form/Button';
import { useForm, Controller } from 'react-hook-form';
import { KategoriAction } from '@/store/action';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/component/Loading';

export default function FormKategori({ route, navigation }){
    const { control, handleSubmit, errors, setValue } = useForm();
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.Kategori.loading);
    const dataForm = useSelector(state => state.Kategori.form)
    const idKategori = route.params.idKategori;
    useEffect(()=>{

            fetch();

            async function fetch(){
                if(idKategori){
                    await dispatch(KategoriAction.getDataById(idKategori))
                }
        }
       
    },[]);

    useEffect(()=>{
        if(dataForm.id != ""){
            setValue("kategori", dataForm.kategori)
        }
        
    },[dataForm.id]);


    async function onSubmit(data){
        data.id = idKategori;
        await dispatch(KategoriAction.Store(data));
        navigation.navigate('Kategori');
        
    }
    return(
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title={` ${route.params.flag} Kategori Barang`}></HeaderMenu>
            <Content>
            <Form style={{padding:10}}>
            <Controller
                rules={{
                    required: { value: true, message: 'Kategori is required' }
                  }}
                name="kategori"
                control={control}
                defaultValue={dataForm.kategori}
                render={({ onChange, value }) => (
                    <InputField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    error={errors.kategori}
                    errorText={errors?.kategori?.message}
                    fieldLabel = "Kategori Barang"
                    style={styles.field}
                    placeholder="Kategori Barang"
                    />
                )}
                />
                    <ButtonAction text="Simpan" style={styles.button} onPress={handleSubmit(onSubmit)}></ButtonAction>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    field:{
        marginBottom:20
    },
    button:{
        height:50,
        width:'100%'
    },
 })
