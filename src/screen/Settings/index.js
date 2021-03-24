import React from 'react';
import { Container, Content, Card, CardItem } from 'native-base';
import Text from '../../component/Text';
import HeaderMenu from '../../component/Main/Header';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../../commons/color';

export default class Settings extends React.Component{
    onPressInfo(){
        this.props.navigation.navigate('info-toko');
    }

    render(){
        return(
           <Container>
              <HeaderMenu title="Pengaturan"></HeaderMenu>
              <Content style={{padding:10}}>
              <Card style={styles.card}>
                <CardItem header button onPress={this.onPressInfo.bind(this)} style={styles.cardItem}>
                    <Image style={styles.icon} source={require('../../asset/icon/toko.png')}></Image>
                    <Text style={styles.text}>Informasi Toko</Text>
                    <View style={styles.hr}></View>
                </CardItem>
            </Card>
            <Card>
                <CardItem header button onPress={() =>  this.props.navigation.navigate('Pengguna')} style={styles.cardItem}>
                    <Image style={styles.icon} source={require('../../asset/icon/user.png')}></Image>
                    <Text style={styles.text}>Manajemen Pengguna</Text>
                    <View style={styles.hr}></View>
                </CardItem>
            </Card>
            <Card>
                <CardItem header button onPress={() => alert("This is Card Header")} style={styles.cardItem}>
                    <Image style={styles.icon} source={require('../../asset/icon/barang.png')}></Image>
                    <Text style={styles.text}>Kategori Barang</Text>
                    <View style={styles.hr}></View>
                </CardItem>
            </Card>
            <Card>
                <CardItem header button onPress={() => alert("This is Card Header")} style={styles.cardItem}>
                    <Image style={styles.icon} source={require('../../asset/icon/db.png')}></Image>
                    <Text style={styles.text}>Cadangkan Data</Text>
                    <View style={styles.hr}></View>
                </CardItem>
            </Card>
              </Content>
           </Container>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        marginBottom:20
    },  
    icon:{
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        marginBottom:5
    },
    text:{
        fontSize:20,
        marginBottom:5
    },
    cardItem:{
        display:'flex', flexDirection:'column'
    },
    hr:{
        backgroundColor:COLORS.silver, height:5, width:'100%', borderRadius:10, opacity:0.1
    }
})