import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
 import { AntDesign } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home/homeScreen';
import Inscription from './src/screens/inscription/inscriptionScreen';
import Profil from './src/screens/profil/profilScreen';
import Shop from './src/screens/shop/shopScreen';
import Panier from './src/screens/panier/panierScreen';
import { NavigationContainer } from '@react-navigation/native';
 import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LogBox } from 'react-native'; 

LogBox.ignoreLogs([
  '[Reanimated] Reduced motion setting is enabled on this device.',
]);

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function App() {

  
  const AppTabMenu = useCallback(() => (
    <Tab.Navigator initialRouteName='home' >
      <Tab.Screen  
      name='home' 
      component={HomeScreen}  
      options={{
        tabBarOptions: { 
          showIcon: true 
       },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={24} />
        ),
      }}
    />  
      <Tab.Screen 
      name='inscription' 
      component={Inscription} 
      options={{
        tabBarOptions: { 
          showIcon: true 
       },
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="filetext1" size={24} color="black" />
        ),
      }}
      />
      <Tab.Screen 

      name='shop'
       component={Shop}
       options={{
        tabBarOptions: { 
          showIcon: true 
       },
        tabBarIcon: ({ color, size }) => (
          <Fontisto name="shopping-store" size={25} color="red" /> 
        ),
      }}

        />
      <Tab.Screen 
      name='profil' 
      component={Profil}
      options={{
        tabBarOptions: { 
          showIcon: true 
       },
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={24} color="black" /> 
        ),
      }}

        />
       
      <Tab.Screen 
      name='panier' 
      component={Panier}
      options={{
        tabBarOptions: { 
          showIcon: true 
       },
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="shopping-basket" size={24} color="black" />
        ),
      }}

        /> 
      

    </Tab.Navigator>
  ), []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "44c2a3" }}>
      <StatusBar
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <NavigationContainer>
      <Stack.Navigator initialRouteName='menu'>
        <Stack.Screen
          name='tabmenu'
          component={AppTabMenu}
          options={{
            headerShown: false
          }} />

      
      </Stack.Navigator>
</NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#44c2a3'
  },

});

export default App;