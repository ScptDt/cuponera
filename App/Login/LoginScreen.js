import { StatusBar } from "expo-status-bar";
import { Alert, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import styles from "../estilos";
import React from "react";
import 'react-native-gesture-handler';

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Inicio Sesion");
          const user = userCredential.user;
          console.log(user);
          navigation.navigate("Inicio");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("El correo o la contraseña es incorrecta, favor de usar los indicados.");
        });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.textote}>Cuponera: Login</Text>
        <Image
          //Logo de la App
          source={{
            uri: 'https://i.ibb.co/DCRYn13/image.png',
          }}
          style={{ width: 170, height: 170, borderRadius: 70 / 2 }}
        />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.txt_spc}
          placeholder="Email"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.txt_spc}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => handleSignIn()} style={styles.btn}><Text style={styles.btntext}>Inicia Sesión</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.btn}><Text style={styles.btntext}>Registrarse</Text></TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default Login;