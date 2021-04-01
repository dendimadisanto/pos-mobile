import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image
  } from 'react-native';
import Text from '../../Text';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import { COLORS } from  '@/commons/color';
export default function MenuHome(){
   const navigation = useNavigation();

    return(
      <View>
             <View style={{marginTop:20, display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                <Icon name="document-outline" style={styles.icon}/>
                  <Text style={styles.text}>Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                <Icon name="book-outline" style={styles.icon}/>
                  <Text style={styles.text}>Riwayat Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu} onPress={()=>navigation.navigate('Pelanggan')}>
                <Icon name="people-outline" style={styles.icon}/>
                  <Text style={styles.text}>Pelanggan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu} onPress={()=>navigation.navigate('Pemasok')}>
                 <Icon name="business-outline" style={styles.icon}/>
                  <Text style={styles.text}>Pemasok</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                <Icon name="stats-chart-outline" style={styles.icon}/>
                  <Text style={styles.text}>Grafik Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu} onPress={()=>navigation.navigate('Settings')}>
                <Icon name="settings-outline" style={styles.icon}/>
                  <Text style={styles.text}>Manajemen Data</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                <Icon name="power-outline" style={styles.icon}/>
                  <Text style={styles.text}>Keluar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonMenu:{
        height:120,
        borderRadius: 10,
        width:110, 
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginRight:10, 
        borderWidth:1,
        borderColor:'#0000',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginTop:20,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        justifyContent:'center'
      },
      logo: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
      },
      text:{
        marginTop:10,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
      },
      icon:{
        fontSize:45,
        color:COLORS.primary
      }
})