import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screen/Login';
import Home from '../../screen/Home';
import Settings from '../../screen/Settings';
import InformasiToko from '../../screen/Settings/InformasiToko';
import Pengguna from '@/screen/Settings/Pengguna'
import FormPengguna from '@/screen/Settings/Pengguna/FormPengguna'
const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Pengguna" component={Pengguna} options={{ headerShown: false }}/>
        <Stack.Screen name="FormPengguna" component={FormPengguna} options={{ headerShown: false }}/>
        <Stack.Screen name="info-toko" component={InformasiToko} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
}
