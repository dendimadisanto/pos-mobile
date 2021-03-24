import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image
  } from 'react-native';
import Text from '../../Text';
import { COLORS } from '../../../commons/color';

export default class MenuHome extends React.Component {
    render() {
        return(
        <View>
             <View style={{marginTop:20, padding : 10, display:'flex', flexDirection:'row'}}>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                  <Image
                      style={styles.logo}
                      source={require('../../../asset/icon/document.png')}
                    />
                  <Text style={{color:COLORS.primary}}>Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                  <Image
                      style={styles.logo}
                      source={require('../../../asset/icon/pen.png')}
                    />
                  <Text style={{color:COLORS.primary}}>Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                  <Image
                      style={styles.logo}
                      source={require('../../../asset/icon/cart.png')}
                    />
                  <Text style={{color:COLORS.primary}}>Penjualan</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding : 10, display:'flex', flexDirection:'row'}}>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                  <Image
                      style={styles.logo}
                      source={require('../../../asset/icon/cart.png')}
                    />
                  <Text style={{color:COLORS.primary}}>Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                  <Image
                      style={styles.logo}
                      source={require('../../../asset/icon/cart.png')}
                    />
                  <Text style={{color:COLORS.primary}}>Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonMenu}>
                  <Image
                      style={styles.logo}
                      source={require('../../../asset/icon/cart.png')}
                    />
                  <Text style={{color:COLORS.primary}}>Penjualan</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
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
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        justifyContent:'center'
      },
      logo: {
        width: 35,
        height: 35,
      },
})