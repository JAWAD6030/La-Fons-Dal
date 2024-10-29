import React from "react";
import { View, ImageBackground} from "react-native";



const LogoBan = () => {

    return (

        <View>
            <View>
                <ImageBackground
                    source={require('../components/banniereLogo.png')}
                    style={{
                        height: 126,
                        width: 412,
                    }}
                    >
                </ImageBackground>
            </View>
        </View>


    )
}
export default LogoBan;
