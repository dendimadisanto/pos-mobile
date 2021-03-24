import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity} from 'react-native'
import Text from '../../component/Text';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right, Body} from 'native-base';
import { COLORS } from '../../commons/color';
import Menu from '../../component/Home/Menu';
import BottomNav from '../../component/Main/BottomNav';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"white"}}>
          <Left>
              <Text style={{width:100,color:COLORS.primary,fontSize:20}}>Kasir Pintar</Text>
          </Left>
          <Body></Body>
          <Right>
              <Image
              style={styles.tinyLogo}
              source={require('../../asset/icon/topIcon.png')}
            />
          </Right>
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
                  <TouchableOpacity bordered style={styles.buttonPenjualan}>
                  <Image
                      style={styles.penjualanLogo}
                      source={require('../../asset/icon/penjualan.png')}
                    />
                  <Text style={{color:'white'}}>Penjualan</Text>
                </TouchableOpacity>
                <TouchableOpacity bordered style={styles.buttonDaftar}>
                <Image
                      style={styles.penjualanLogo}
                      source={require('../../asset/icon/cart.png')}
                    />
                  <Text>Daftar Barang</Text>
                </TouchableOpacity>
            </View>
            {/* awal menu */}
                <Menu></Menu>
            {/* akhir menu */}
            </View>
        </Content>
        <Footer>
            <BottomNav></BottomNav>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 20,
    height: 20,
  },
 
 
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

  textStyle:{
    fontSize:15,
  },  
});