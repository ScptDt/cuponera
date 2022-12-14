//Aunque parezca que ciertos imports no se usan las pantallas si lo hacen
//No borrar ningun import
import { StatusBar } from "expo-status-bar";
import { Alert, Text, TextInput, View, TouchableOpacity, Image, Share } from "react-native";
import { Searchbar, Divider } from 'react-native-paper';
import Constants from 'expo-constants';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import styles from "./estilos";
import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Cupon from "./Screens/CuponScreen";
import Home from "./Screens/HomeScreen";
import Tortas from "./Screens/TortasScreen";
import Tacos from "./Screens/TacosScreen";
import Tostadas from "./Screens/TostadasScreen";
import Perfil from "./Screens/PerfilScreen";
import Login from "./Login/LoginScreen";
import SignUp from "./Login/SignUpScreen";
import Start from "./Login/StartScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Inicio" component={Home} options={{ headerLeft: null }} />
        <Stack.Screen name="Tortas" component={Tortas} />
        <Stack.Screen name="Tacos" component={Tacos} />
        <Stack.Screen name="Tostadas" component={Tostadas} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cupon" component={Cupon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}