import { StatusBar } from "expo-status-bar";
import { Alert, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import styles from "../estilos";
import React from "react";
import 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textote}>Inicio de Sesion</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Image
            //Logo de la App
            source={{
              uri: 'https://i.ibb.co/DCRYn13/image.png',
            }}
            style={{ width: 170, height: 170, borderRadius: 70 / 2 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={[styles.txt_spc, { flexDirection: 'row' }]}>
          <Feather name="mail" size={32} color="black" />
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.txt_spc, { flexDirection: 'row' }]}>
          <Feather name="lock" size={32} color="black" />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.txt_spc}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.btntext}>o</Text>
        <Text style={styles.btntext}>Ingresa con</Text>
      </View>

      <View style={[styles.container, { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }]}>

        <TouchableOpacity style={{ paddingRight: 50 }}>
          <FontAwesome5 name="facebook" size={46} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingLeft: 50 }}>
          <FontAwesome name="whatsapp" size={46} color="black" />
        </TouchableOpacity>

      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleSignIn()} style={styles.btn}><Text style={styles.btntext}>Inicia Sesión</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default Login;