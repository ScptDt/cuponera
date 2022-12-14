import { StatusBar } from "expo-status-bar";
import { Alert, Text, TextInput, View, TouchableOpacity, Image, Share } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import styles from "../estilos";
import React from "react";
import 'react-native-gesture-handler';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Se creo la cuenta");
          const user = userCredential.user;
          console.log(user);
          navigation.goBack();
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error.message);
        });
    };
  
    return (
      <View style={styles.container}>
        <Text>Cuponera: Registro</Text>
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
        <TouchableOpacity onPress={() => handleCreateAccount()} style={styles.btn}><Text>Registarse</Text></TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default SignUp;