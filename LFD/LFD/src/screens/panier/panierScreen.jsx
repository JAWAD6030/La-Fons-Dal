import React from 'react';
import { View, Text, Image, StyleSheet,Button } from 'react-native';
import LogoBan from '../components/banniere';

const Panier = ({navigation}) =>{

return(
    <View>
        <LogoBan/>
        
    <View>
      <Text>Mon Panier</Text>
      <View/> 
      <Button
        onPress={() => navigation.navigate("shop")}
        title="shopping"
      />
    </View>
</View>
);


}

export default Panier;