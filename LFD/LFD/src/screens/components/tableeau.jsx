
import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import axios from "axios";
import { useState } from "react";
import cola from '../../../assets/canette/cocacola.png';
import FantaO from '../../../assets/canette/FantaOrange.png';
import FantaC from '../../../assets/canette/fantaCitron.jpg';



const Img = [

    cola,
    FantaC,
    FantaO

]


const MyTableau = () => {



    




    const [data, setData] = useState([]);

    const getmarch = () => {
        setData([]);
        axios.get(`http://192.168.1.26:6030/march`)
            .then(({ data }) => {
                setData(data)
                console.log(data)
            })
            .catch((error) => console.error(error))

    }
    // const [setAdvice] = useState();

    // const getAdvice = () => {
    //     axios
    //         .get("http://10.10.19.91:6030/march")
    //         .then((response) => {
    //             setAdvice = response;
    //         });
    // };

    // async function getmarchand() {
    //     try {
    //         const response = await axios.get
    // ('http://10.10.19.91:6030/march', {
    //             params: {
    //                 nom: "",
    //                 marque: "",
    //                 prix: "",
    //             }
    //         });
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const [counter, setCounter] = useState(0)
    const panierInfo = []

    
    const handleClick = () => {
    
      setCounter(counter + 1)
      const total = {prix} * counter
    
    panierInfo = [counter,total]

    }

    const Item = ({ title, prix, nom }) => (
        <View style={{ flex: 1 }}>

            <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf: "flex-start" }}>{title} </Text>
            <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf: "flex-start" }}>{nom} </Text>
            <Text style={{ color: '#bc445f', height: 30, fontSize: 17, alignSelf: "flex-end" }}>{prix}€ </Text>
             <Button title="ajouter"
                onPress={handleClick} color="#bc445f" />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.marque}
            nom={item.nom}
            prix={item.prix} />
    );

    return (
        <View style={{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: "white" }}>

            <View style={{ flex: 1 / 2 }}>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.marchandise_id}
                />
            </View>
            <Button title="Get"
                onPress={getmarch} color="green" />
        </View>
    );
};


export default MyTableau;







