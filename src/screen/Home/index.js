import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity} from 'react-native'
import Text from '@/component/Text';
import { Container, Header, Content , Left, Body} from 'native-base';
import { Icon } from 'native-base';
import { COLORS } from '@/commons/color';
import Menu from '@/component/Home/Menu';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
    return (
      <Container>
        <Header style={{backgroundColor:"white"}} androidStatusBarColor='#F33643'>
          <Left>
              <Text style={{width:300,color:COLORS.primary,fontSize:20}}>Kasir Pintar</Text>
          </Left>
          <Body></Body>
        </Header>
        <Content>
            <View style={{padding:20}}>
              <View style={{marginBottom:30}}>
                  <Text style={{color:'#8A959E', fontSize:20}}>
                    Welcome In
                  </Text>
                  <Text style={{fontSize:30}}>Manis Laris</Text>
              </View>
              <View style={{flexDirection:'row', display:'flex', justifyContent:'center'}}>
                  <TouchableOpacity bordered style={styles.buttonPenjualan} onPress={()=>navigation.navigate('Barang')}>
                  <Icon name="calculator-outline" style={styles.icon}/>
                  <Text style={styles.textPenjualan}>Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonDaftar}>
                <Icon name="cart-outline" style={styles.icon2}/>
                  <View>
                      <Text style={styles.textDaftarBarang}>Daftar</Text>
                      <Text style={styles.textDaftarBarang}>Barang</Text>
                  </View>
                  
                </TouchableOpacity>
            </View>
            </View>
            {/* awal menu */}
            <Menu></Menu>
            {/* akhir menu */}
        </Content>
      </Container>
    );
  }

const styles = StyleSheet.create({
  buttonPenjualan:{
    height:100,
    width:150,
    backgroundColor:COLORS.primary, 
    marginRight:10, 
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius: 10,
    justifyContent:'space-around',
  },
  buttonDaftar:{
    height:100,
    borderRadius: 10,
    width:150, 
    display:'flex',
    flexDirection:'row',
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
    justifyContent:'space-around'
  },
  textDaftarBarang:{
    fontSize:16,fontWeight:'bold', color:COLORS.primary
  },
  textPenjualan:{
    fontSize:16,fontWeight:'bold', color:'white'
  },
  icon:{
    fontSize:50,
    color:'white'
  },
  icon2:{
    fontSize:50,
    color:COLORS.primary
  }
});