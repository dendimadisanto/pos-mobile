import React from 'react';
import { FooterTab } from 'native-base';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { COLORS } from '../../../commons/color';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav(){
    const navigation = useNavigation();
    
    function onPressSetting(){
        navigation.navigate('Settings')
    }
    return(
        <FooterTab style={{backgroundColor:'white', justifyContent:'center'}}>
              <View style={{padding:10,backgroundColor:COLORS.primary, height:'100%', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                  <TouchableOpacity>
                  <Image
                      style={styles.penjualanLogo}
                      source={require('../../../asset/icon/home.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={onPressSetting}>
                  <Image
                      style={styles.penjualanLogo}
                      source={require('../../../asset/icon/setting.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                      style={styles.penjualanLogo}
                      source={require('../../../asset/icon/profile.png')}
                    />
                  </TouchableOpacity>
              </View>
          </FooterTab>
    )
}

const styles = StyleSheet.create({
    penjualanLogo: {
        width: 30,
        height: 30,
      },
})