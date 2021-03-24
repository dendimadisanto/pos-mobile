import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import PickerField from '@/component/Form/PickerField';
import InputField from '@/component/Form/InputField';
import ButtonAction from '@/component/Form/Button';
import { useForm, Controller } from 'react-hook-form';
import { PenggunaAction } from '@/config/store/action';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/component/Loading';

export default function FormPengguna(){
    const { control, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.Pengguna.loading);
    const dataUsergroup = useSelector(state => state.Pengguna.usergroupData)
    useEffect(()=>{
        dispatch(PenggunaAction.getUserGroup());
    },[]);
    function onSubmit(data){
        
    }
    return(
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title="Form Pengguna"></HeaderMenu>
            <Content>
            <Form style={{padding:10}}>
            <Controller
                rules={{
                    required: { value: true, message: 'Username is required' }
                  }}
                name="username"
                control={control}
                defaultValue=""
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
                    control={control}
                    defaultValue=""
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
                name="usergroup"
                control={control}
                rules={{
                    required: { value: true, message: 'Usergroup is required' }
                  }}
                defaultValue=""
                render={({ onChange, value }) => (
                   <PickerField 
                   fieldLabel="Usergroup" 
                   style={styles.field} 
                   items={items}
                   onValueChange = {(text => onChange(text))} 
                   value={dataUsergroup}
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
