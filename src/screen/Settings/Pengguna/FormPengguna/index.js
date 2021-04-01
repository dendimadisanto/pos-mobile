import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import PickerField from '@/component/Form/PickerField';
import InputField from '@/component/Form/InputField';
import ButtonAction from '@/component/Form/Button';
import { useForm, Controller } from 'react-hook-form';
import { PenggunaAction } from '@/store/action';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/component/Loading';

export default function FormPengguna({ route, navigation }){
    const { control, handleSubmit, errors, setValue } = useForm();
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.Pengguna.loading);
    const dataUsergroup = useSelector(state => state.Pengguna.usergroupData)
    const dataForm = useSelector(state => state.Pengguna.form)
    const idPengguna = route.params.idPengguna;
    useEffect(()=>{

            fetch();

            async function fetch(){
                await dispatch(PenggunaAction.getUserGroup());
    
                if(idPengguna){
                    await dispatch(PenggunaAction.getPenggunaById(idPengguna))
                }
        }
       
    },[]);

    useEffect(()=>{
        if(dataForm.id != ""){
            setValue("username", dataForm.username)
            setValue("password", dataForm.password)
            setValue("usergroupid", dataForm.usergroupid)
        }
        
    },[dataForm.id]);


    async function onSubmit(data){
        data.id = idPengguna;
        await dispatch(PenggunaAction.Store(data));
        navigation.navigate('Pengguna');
    }
    return(
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title={` ${route.params.flag} Pengguna`}></HeaderMenu>
            <Content>
            <Form style={{padding:10}}>
            <Controller
                rules={{
                    required: { value: true, message: 'Username is required' }
                  }}
                name="username"
                control={control}
                defaultValue={dataForm.username}
                render={({ onChange, value }) => (
                    <InputField
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    error={errors.username}
                    errorText={errors?.name?.message}
                    fieldLabel = "Username"
                    style={styles.field}
                    placeholder="Username"
                    />
                )}
                />
                <Controller
                 rules={{
                    required: { value: true, message: 'Password is required' }
                  }}
                    name="password"
                    defaultValue={dataForm.password}
                    control={control}
                    render={({ onChange, value }) => (
                        <InputField
                        onChangeText={(text) => onChange(text)}
                        value={value}
                        error={errors.password}
                        errorText={errors?.password?.message}
                        fieldLabel = "Password"
                        style={styles.field}
                        type="password"
                        placeholder="Password"
                    />
                )}
                />

            <Controller
                name="usergroupid"
                control={control}
                rules={{
                    required: { value: true, message: 'Usergroup is required' }
                  }}
                defaultValue={dataForm.usergroupid}
                render={({ onChange, value }) => (
                   <PickerField 
                   fieldLabel="Usergroup" 
                   style={styles.field} 
                   items={dataUsergroup}
                   onValueChange = {(text => onChange(text))} 
                   value={value}
                   error={errors.usergroup}
                   errorText={errors?.usergroup?.message}
                   ></PickerField>
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
