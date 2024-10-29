import { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import LogoBan from '../components/banniere';
import axios from "axios";



const Inscription = ({ navigation }) => {

    const [inputValue, setInputValue] = useState({
        first_name: "",
        last_name: "",
        birth_date: "",
        email: "",
        numero: "",
        adresse: "",
    });

const [iptValue,setIptValue] = useState({

    email: "",

});

const [userInfo, setUserInfo] = useState([])


    

    const handleChangeValueTwo = (email, value) => {
        setIptValue({ ...iptValue , [email]: value })
    }

    const handleChangeValue = (name, value) => {
        setInputValue({ ...inputValue, [name]: value })
    }


    const handleSubmit = async () => {
        
        if (inputValue) {
            
            await (new Promise((resolve) => setTimeout(resolve, 2000)));
            try {
                const response = await axios.post('http://192.168.1.26:6030/register', inputValue);
                if (response) {
                    Alert.alert('Success')
                    navigation.navigate('shop')
                }

            } catch (error) {
                console.error(error);
                Alert.alert('Error');
            }
        } else {
            Alert.alert('complete')
        };
    };

   const handleSubmitTwo = async () => {

        if (iptValue) {
            
            try {
              
                const response = await axios.post('http://192.168.1.26:6030/user', iptValue);
                if (response) {
                    Alert.alert('Success')
                    setUserInfo(response.data)
                    
                }
              

            } catch (error) {
                console.error(error);
                Alert.alert('Error');
            }
        } else {
            Alert.alert('complete')
        };
    };

    useEffect(() => {
        if (userInfo.length > 0) {
            navigation.navigate('profil', {
                otherParams: userInfo
            }) 
        }
    }, [userInfo])
    
//    function getUser () {
//     try {     
//         AsyncStorage.setItem();
//         }
//         catch (error) {
//         console.log(error)
//         }
//     }

//     getUser(userInfo);
    return (

        <View>
            <LogoBan />

            <View>
                <Text style={{ fontFamily: 'PermanentMarker', fontSize: 32, color: "#bc445f", }}>Inscription</Text>
                <Text></Text>
                <TextInput
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre prenom'
                    inputMode='text'

                    value={inputValue.first_name}

                    onChangeText={(text) => handleChangeValue('first_name', text)}
                />
                <TextInput
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre nom'
                    inputMode='text'
                    onChangeText={(text) => handleChangeValue('last_name', text)}

                    value={inputValue.last_name} />
                <TextInput
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre date de naissance(jj/mm/yyyy)'
                    inputMode='text'

                    value={inputValue.birth_date}

                    onChangeText={(text) => handleChangeValue('birth_date', text)}
                />
                <TextInput
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre Email'
                    inputMode='text'
                    onChangeText={(text) => handleChangeValue('email', text)}

                    value={inputValue.email} />
                <TextInput
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre numero de GSM:'
                    inputMode='text'

                    value={inputValue.numero}
                    onChangeText={(text) => handleChangeValue('numero', text)}
                />
                <TextInput
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre adresse (rue, n°, Localitè)'
                    inputMode='text'
                    onChangeText={(text) => handleChangeValue('adresse', text)}
                    value={inputValue.adresse} />


                <Button
                    title='Valider'
                    onPress={handleSubmit} />
                <Button
                    title='Annuler'
                    onPress={() => navigation.goBack()} />

            </View>
            <View>
                <Text style={{ fontFamily: 'PermanentMarker', fontSize: 32, color: "#bc445f", }}>CONNEXION</Text>
                <TextInput
                    value={iptValue.email}
                    onChangeText={(text) => handleChangeValueTwo('email', text)}
                    style={{ height: 40, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder='Entrez votre Email'
                    inputMode='text'
                />

                <Button
                    title='Valider'
                    onPress={handleSubmitTwo} />


            </View>


        </View>

    );

};

export default Inscription;