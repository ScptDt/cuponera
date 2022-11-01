import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import React from "react";

function Principal() {
  return (
    <View style={styles.container}>
      <Text>Cuponera: Principal</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//He bryan explicanos bien este pdo porfavor, gracias, domingo 13 14:42 de noviembre llegan los aliens
// Bryan porfa no se que son los metodos genericos
function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Se creo la cuenta");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Se logeo");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Cuponera: Login</Text>
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
      <TouchableOpacity onPress={handleSignIn} style={styles.btn}><Text>Login</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount} style={styles.btn}><Text>Registrarse</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt_spc: {
    width: 356,
    height: 68,
    marginTop: 10,
    backgroundColor: "#E5E5E9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  btn: {
    marginTop: 10,
    width: 344,
    height: 56,
    borderRadius: 50,
    backgroundColor: "#CDBE78",
    fontFamily: "arial",
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 32,
    color: "#383838",
    alignItems: "center",
  },
});
