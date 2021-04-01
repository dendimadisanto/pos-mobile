import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { Container,Content, Form } from 'native-base';
import HeaderMenu from '@/component/Main/Header';
import InputField from '@/component/Form/InputField';
import TextAreaField from '@/component/Form/TextAreaField';
import PickerField from '@/component/Form/PickerField';
import ButtonAction from '@/component/Form/Button';
import { useForm, Controller } from 'react-hook-form';
import { BarangAction } from '@/store/action';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/component/Loading';
import BarcodeScanner from '@/component/BarcodeScanner';

export default function FormBarang({ route, navigation }){
    const [scan, setSCan ] = useState(false)
    const { control, handleSubmit, errors, setValue } = useForm();
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.Barang.loading);
    const dataForm = useSelector(state => state.Barang.form)
    const dataSatuan = useSelector(state => state.Barang.dataSatuan)
    const dataKategori = useSelector(state => state.Barang.dataKategori)
    const dataPemasok = useSelector(state => state.Barang.dataPemasok)
    const idBarang = route.params.idBarang;
    useEffect(()=>{

            fetch();

            async function fetch(){
                await dispatch(BarangAction.setLoading(true));
                await dispatch(BarangAction.getPemasok());
                await dispatch(BarangAction.getKategori());
                await dispatch(BarangAction.getSatuan());

                if(idBarang!=""){
                    await dispatch(BarangAction.getDataById(idBarang))
                }
                await dispatch(BarangAction.setLoading(false));
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
        data.id = idBarang;
        await dispatch(BarangAction.Store(data));
        navigation.navigate('Barang');
    }

    function onBarcodeClick(params) {
        setSCan(params)
    }

    function onScanned(params){
       setSCan(params.isScanned);
       dispatch(BarangAction.setBarcode(params.data))
    }

    return scan ? (
        <BarcodeScanner onScanned={onScanned}>
          <SafeAreaView style={[styles.overlay, styles.bottomOverlay]}>
            <Button
              onPress={() => { setSCan(false) }}
              style={styles.enterBarcodeManualButton}
              title="Kembali"
             />
            </SafeAreaView>
        </BarcodeScanner>
    ):
    (
        <Container>
            <Loading value={loading}></Loading>
            <HeaderMenu title={` ${route.params.flag} Barang`}></HeaderMenu>
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
                    rules={{
                        required: { value: true, message: 'Kode Barang is required' }
                    }}
                    name="kode_barang"
                    control={control}
                    defaultValue={dataForm.kode_barang}
                    render={({ onChange, value }) => (
                        <InputField
                        onChangeText={(text) => onChange(text)}
                        value={value}
                        error={errors.kode_barang}
                        type="barcode"
                        onBarcodeClick={onBarcodeClick}
                        errorText={errors?.kode_barang?.message}
                        fieldLabel = "Kode Barang"
                        style={styles.field}
                        placeholder="Kode Barang"
                        />
                    )}
                />
                 <Controller
                    name="id_kategori"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Kategori is required' }
                    }}
                    defaultValue={dataForm.id_kategori}
                    render={({ onChange, value }) => (
                    <PickerField 
                        fieldLabel="Kategori" 
                        style={styles.field} 
                        items={dataKategori}
                        onValueChange = {(text => onChange(text))} 
                        value={value}
                        error={errors.usergroup}
                        errorText={errors?.usergroup?.message}
                    ></PickerField>
                    )}
                    />    
                <Controller
                    name="id_pemasok"
                    control={control}
                    defaultValue={dataForm.id_pemasok}
                    render={({ onChange, value }) => (
                    <PickerField 
                        fieldLabel="Pemasok" 
                        style={styles.field} 
                        items={dataPemasok}
                        onValueChange = {(text => onChange(text))} 
                        value={value}
                    ></PickerField>
                    )}
                />   
                 <Controller
                    rules={{
                        required: { value: true, message: 'Harga is required' }
                    }}
                    name="harga"
                    control={control}
                    defaultValue={dataForm.harga}
                    render={({ onChange, value }) => (
                        <InputField
                        onChangeText={(text) => onChange(text)}
                        value={value}
                        error={errors.harga}
                        errorText={errors?.harga?.message}
                        fieldLabel = "Harga"
                        style={styles.field}
                        placeholder="Harga"
                        keyboardType="numeric"
                        />
                    )}
                />   
                <Controller
                    name="id_satuan"
                    control={control}
                    defaultValue={dataForm.id_satuan}
                    render={({ onChange, value }) => (
                    <PickerField 
                        fieldLabel="Satuan" 
                        style={styles.field} 
                        items={dataSatuan}
                        onValueChange = {(text => onChange(text))} 
                        value={value}
                    ></PickerField>
                    )}
                />   
                 <Controller
                    name="keterangan"
                    control={control}
                    defaultValue={dataForm.keterangan}
                    render={({ onChange, value }) => (
                        <TextAreaField
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            fieldLabel = "Keterangan"
                            style={styles.field}
                            placeholder="Keterangan"
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
