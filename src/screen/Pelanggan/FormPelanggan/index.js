import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import InputField from '@/component/Form/InputField';
import TextAreaField from '@/component/Form/TextAreaField';
import ButtonAction from '@/component/Form/Button';
import { useForm, Controller } from 'react-hook-form';
import { PelangganAction } from '@/store/action';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/component/Loading';

export default function FormPelanggan({ route, navigation }){
    const { control, handleSubmit, errors, setValue } = useForm();
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.Pelanggan.loading);
    const dataForm = useSelector(state => state.Pelanggan.form)
    const idPelanggan = route.params.idPelanggan;
    useEffect(()=>{

            fetch();

            async function fetch(){
                if(idPelanggan!=""){
                    await dispatch(PelangganAction.getDataById(idPelanggan))
                }
        }
       
    },[]);

    useEffect(()=>{
        if(dataForm.id != ""){
            setValue("nama", dataForm.nama)
            setValue("email", dataForm.email)
            setValue("alamat", dataForm.alamat)
            setValue("telepon", dataForm.telepon)
        }
        
    },[dataForm.id]);


    async function onSubmit(data){
        data.id = idPelanggan;
        await dispatch(PelangganAction.Store(data));
        navigation.navigate('Pelanggan');
    }
    return(
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title={` ${route.params.flag} Pelanggan`}></HeaderMenu>
            <Content>
            <Form style={{padding:10}}>
            <Controller
                rules={{
                    required: { value: true, message: 'Nama is required' }
                  }}
                name="nama"
                control={control}
                defaultValue={dataForm.nama}
                render={({ onChange, value }) => (
                    <InputField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    error={errors.nama}
                    errorText={errors?.nama?.message}
                    fieldLabel = "Nama"
                    style={styles.field}
                    placeholder="Nama"
                    />
                )}
                />
                <Controller
                name="email"
                control={control}
                defaultValue={dataForm.email}
                render={({ onChange, value }) => (
                    <InputField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    fieldLabel = "Email"
                    style={styles.field}
                    placeholder="Email"
                    />
                )}
                />
                 <Controller
                name="telepon"
                control={control}
                defaultValue={dataForm.telepon}
                render={({ onChange, value }) => (
                    <InputField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    fieldLabel = "Telepon"
                    style={styles.field}
                    placeholder="Telepon"
                    keyboardType="numeric"
                    />
                )}
                />
                 <Controller
                name="alamat"
                control={control}
                defaultValue={dataForm.alamat}
                render={({ onChange, value }) => (
                    <TextAreaField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    fieldLabel = "Alamat"
                    style={styles.field}
                    placeholder="Alamat"
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
