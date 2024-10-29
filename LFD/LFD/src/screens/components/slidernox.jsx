import {  View, Dimensions, Image } from 'react-native'

import tropico from '../../../assets/LOGOMARQUE/tropico2.png'
import React from 'react'
//import Carousel from 'react-native-reanimated-carousel';
import RB from '../../../assets/LOGOMARQUE/RB.png'
import coca from '../../../assets/LOGOMARQUE/coca.png'                              // import des images
import fanta from '../../../assets/LOGOMARQUE/Fanta.png'
//import { SliderBox } from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel'; 

const images = [
    fanta,
    coca,                                                                           // creer d 'un tableau dobj pour les images
    tropico,
    RB,
];



const Carousell = () => {
    const width = Dimensions.get('window').width;
  
    const renderItem = ({ item }) => (
      <Image source={{ uri: item.uri }} style={{ width: width, height: 200 }} />
    );
  
    return (
      <View style={{ flex: 1 }}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          loop={true}
          autoplay={true}
        />
      </View>
    );
  };
  
  export default Carousell;



