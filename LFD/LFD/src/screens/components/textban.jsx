import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1400,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);



  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  const [fontsloaded] = useFonts({
    "PermanentMarker": require('../../../assets/fonts/PermanentMarker-Regular.ttf'),

  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  if (!fontsloaded) {

    return undefined;
  } else {
    SplashScreen.hideAsync();

  }


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <FadeInView
        style={{
          justifyContent:'center',
          width: 380,
          height: 225,
          backgroundColor: 'transparent',
        }}>
        <Text style={{ fontFamily:'PermanentMarker', fontSize: 21, color: "white",}}>
          Une envie de se retaper en friandise, grosse soirèe entre potes ou bien le syndrome de Flemme,
          Tranquille...
          La Fons'Dal est la pour toi :-D!
        </Text>
      </FadeInView>
    </View>
  );

};
