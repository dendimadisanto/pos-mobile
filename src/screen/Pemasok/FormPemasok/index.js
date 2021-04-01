import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import InputField from '@/component/Form/InputField';
import TextAreaField from '@/component/Form/TextAreaField';
import ButtonAction from '@/component/Form/Button';
import { useForm, Controller } from 'react-hook-form';
import { PemasokAction } from '@/store/action';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/component/Loading';

export default function FormPemasok({ route, navigation }){
    const { control, handleSubmit, errors, setValue } = useForm();
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.Pemasok.loading);
    const dataForm = useSelector(state => state.Pemasok.form)
    const idPemasok = route.params.idPemasok;
    useEffect(()=>{

            fetch();

            async function fetch(){
                if(idPemasok!=""){
                    await dispatch(PemasokAction.getDataById(idPemasok))
                }
        }
       
    },[]);

    useEffect(()=>{
        if(dataForm.id != ""){
            setValue("pemasok", dataForm.pemasok)
            setValue("email", dataForm.email)
            setValue("alamat", dataForm.alamat)
            setValue("telepon", dataForm.telepon)
        }
        
    },[dataForm.id]);


    async function onSubmit(data){
        data.id = idPemasok;
        await dispatch(PemasokAction.Store(data));
        navigation.navigate('Pemasok');
    }
    return(
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title={` ${route.params.flag} Pemasok`}></HeaderMenu>
            <Content>
            <Form style={{padding:10}}>
            <Controller
                rules={{
                    required: { value: true, message: 'Pemasok is required' }
                  }}
                name="pemasok"
                control={control}
                defaultValue={dataForm.pemasok}
                render={({ onChange, value }) => (
                    <InputField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    error={errors.pemasok}
                    errorText={errors?.pemasok?.message}
                    fieldLabel = "Pemasok"
                    style={styles.field}
                    placeholder="Pemasok"
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
