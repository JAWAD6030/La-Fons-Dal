import { useEffect, useState, } from 'react';
import { View, TextInput, Button, Image, Alert, Text, FlatList, StyleSheet } from 'react-native';
import LogoBan from '../components/banniere';

const Profil = ({ route, navigation }) => {

  const { otherParams } = route.params;
  const [test, setTest] = useState([])

  useEffect(() => {
    otherParams ? setTest(otherParams) : console.log('nope');
  }, [otherParams])






  //   const Item = ({nom, prenom, email, date,numero,adresse}) => (
  //     <View style={{ flex: 1}}>
  //         <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf:"flex-start" }}>{nom} </Text>
  //         <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf:"flex-start" }}>{prenom} </Text>
  //         <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf:"flex-end" }}>{email} </Text>
  //         <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf:"flex-start" }}>{adresse} </Text>
  //         <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf:"flex-start" }}>{date} </Text>
  //         <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf:"flex-end" }}>{numero} </Text>
  //     </View>
  // );

  // const renderItem = ({item})=>( 
  //     <Item nom={item.first_name}
  //     prenom={item.last_name}
  //     email={item.email}
  //     date={item.birth_date}
  //     numero={item.numero}
  //     adresse={item.adresse} />
  //   );






  return (


    <View>
      <LogoBan />
      <View>
        <Text style={styles.titre}>Mon Profil</Text>
        <View>
          {test && test.map((i) => ( 
    
            <View style={styles.container}>
              <Text style={styles.item}>
                {i.first_name} {"\n"}
                {i.last_name} {"\n"}
              {i.birth_date} {"\n"}
                {i.adresse}{"\n"}
                {i.numero}{"\n"}
                {i.email}
              </Text>

            </View>

          )
          )}
        </View>

  

        {/* <View style={{flex:1/2}}>
                <FlatList
                    data={otherParams}
                    renderItem={renderItem}
                    keyExtractor={item => item.client_id}
                />
                </View> */}
      </View>
      <Button
        onPress={() => navigation.navigate("shop")}
        title="shopping"
      />
      <Button
        title='retour'
        onPress={() => navigation.goBack()} />
    </View>

  );
};
console.log(typeof birth_date);
const styles = StyleSheet.create({

  container: {
  
    padding: 0,
  },

  item: {
    letterSpacing:3,
    textAlign:"left",
    color:"grey",
    padding: 5,
  fontSize: 27,
  marginTop: 0,
  writingDirection:"rlt"
  }, 

  titre:{
    fontFamily: 'PermanentMarker', 
    fontSize: 32,
     color: "#bc445f",



  }


});

export default Profil;