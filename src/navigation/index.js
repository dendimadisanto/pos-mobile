import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screen/Login';
import Home from '@/screen/Home';
import Settings from '@/screen/Settings';
import InformasiToko from '@/screen/Settings/InformasiToko';
import Pengguna from '@/screen/Settings/Pengguna'
import FormPengguna from '@/screen/Settings/Pengguna/FormPengguna'
import Kategori from '@/screen/Settings/Kategori';
import FormKategori from '@/screen/Settings/Kategori/FormKategori';
import Pelanggan from '@/screen/Pelanggan';
import FormPelanggan from '@/screen/Pelanggan/FormPelanggan';
import Pemasok from '@/screen/Pemasok';
import FormPemasok from '@/screen/Pemasok/FormPemasok';
import Barang from '@/screen/Barang';
import FormBarang from '@/screen/Barang/FormBarang';
const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Pengguna" component={Pengguna} options={{ headerShown: false }}/>
        <Stack.Screen name="FormPengguna" component={FormPengguna} options={{ headerShown: false }}/>
        <Stack.Screen name="info-toko" component={InformasiToko} options={{ headerShown: false }}/>
        <Stack.Screen name="Kategori" component={Kategori} options={{ headerShown: false }}/>
        <Stack.Screen name="FormKategori" component={FormKategori} options={{ headerShown: false }}/>
        <Stack.Screen name="Pelanggan" component={Pelanggan} options={{ headerShown: false }}/>
        <Stack.Screen name="FormPelanggan" component={FormPelanggan} options={{ headerShown: false }}/>
        <Stack.Screen name="Pemasok" component={Pemasok} options={{ headerShown: false }}/>
        <Stack.Screen name="FormPemasok" component={FormPemasok} options={{ headerShown: false }}/>
        <Stack.Screen name="Barang" component={Barang} options={{ headerShown: false }}/>
        <Stack.Screen name="FormBarang" component={FormBarang} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
}
