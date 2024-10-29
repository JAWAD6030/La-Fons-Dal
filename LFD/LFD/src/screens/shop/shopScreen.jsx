import React from 'react';
import { View } from 'react-native';
import LogoBan from '../components/banniere';
import MyTableau from '../components/tableeau';



const Shop = () => {

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <LogoBan /> 
       
        <View style={{flex: 1}}>
          <MyTableau/>
        </View>
      </View>
    </View>

  );


}

export default Shop;