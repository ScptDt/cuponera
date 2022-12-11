import { StatusBar } from "expo-status-bar";
import { Alert, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView, FlatList } from "react-native";
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

//PANTALLA HOMESCREEN REAL
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          //Logo de la App
          source={{
            uri: 'https://i.ibb.co/DCRYn13/image.png',
          }}
          style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} >
          <Image
            //Perfil
            source={{
              uri: 'https://i.ibb.co/B2BcD9S/images.jpg',
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              alignContent: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => console.log(text)}
          icon="magnify"
          style={{ margin: 5}}
        />
      </View>
      <Divider style={{ margin: 10}}/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Tortas')} >
          <View style={styles.productos}>
            <Image
              //Imagen Torta
              source={{
                uri: 'https://i.ibb.co/KLHc2Yk/image.png',
              }}
              style={{ width: 250, height: 150, borderRadius: 10, }}
            />
            <Text style={styles.encabezado}>Tortas "Morbius"</Text>
            <Text style={styles.descripcion}>It's Tortas Time!!!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tacos')} >
          <View style={styles.productos}>
            <Image
              //Imagen Taco
              source={{
                uri: 'https://i.ibb.co/pnHCRDV/tacos-polvo.jpg',
              }}
              style={{ width: 250, height: 150, borderRadius: 10, }}
            />
            <Text style={styles.encabezado}>Tacos Polvo"</Text>
            <Text style={styles.descripcion}>Los mejores tacos de todo Navojoa</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tostadas')} >
          <View style={styles.productos}>
            <Image
              //Imagen Tostada
              source={{
                uri: 'https://i.ibb.co/n00bmmF/image.png',
              }}
              style={{ width: 250, height: 150, borderRadius: 10, }}
            />
            <Text style={styles.encabezado}>Tostadas “El Brayan”</Text>
            <Text style={styles.descripcion}>Estan tremendas!!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tostadas')} >
          <View style={styles.productos}>
            <Image
              //Imagen Tostada
              source={{
                uri: 'https://i.ibb.co/n00bmmF/image.png',
              }}
              style={{ width: 250, height: 150, borderRadius: 10, }}
            />
            <Text style={styles.encabezado}>Tostadas “El Brayan 2”</Text>
            <Text style={styles.descripcion}>Tan tremendas como las primeras!!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//PANTALLA HOME SCREEN DE PRUEBAS
/*function HomeScreen({ navigation }){
  const DATA = [
    {
      id: 1,
      nom: 'Tacos Polvo',
      desc: 'Los mejores tacos de todo Navojoa',
      uri: 'https://i.ibb.co/pnHCRDV/tacos-polvo.jpg',
    },
    {
      id: 2,
      nom: 'Tostadas “El Brayan”',
      desc: 'Tan grandes que no te la acabas!',
      uri: 'https://i.ibb.co/n00bmmF/image.png',
    },
    {
      id: 3,
      nom: 'Tortas “Morbius”',
      desc: "It's tortas time!!!",
      uri: 'https://i.ibb.co/KLHc2Yk/image.png',
    },
  ];
  const Item = ({nom, desc, uri}) => (
    <View>
        <Text style={styles.txt1}>{nom}</Text>
        <Text style={styles.txt2}>{desc}</Text>
        <Image
          source={uri}
          style={styles.img}
        />
    </View>
  );

  const RItem = ({item}) => <Item nom={item.nom} desc={item.desc} uri={item.uri} />

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          //Logo de la App
          source={{
            uri: 'https://i.ibb.co/DCRYn13/image.png',
          }}
          style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
        />
        <Image
          //Perfil
          source={{
            uri: 'https://i.ibb.co/B2BcD9S/images.jpg',
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 70 / 2,
            alignContent: 'center',
          }}
        />
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => console.log(text)}
        icon="magnify"
      />
      <Divider />
      <Text style={styles.paragraph}>Seleccione una oferta</Text>
      <SafeAreaView>
      <FlatList data={DATA} renderItem={RItem} keyExtractor={item => item.id} />
      </SafeAreaView>
    </View>
  );

}*/

function PerfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Perfil (Perfil Screen)</Text>
      <Image
        //Imagen Perfil
        source={{
          uri: 'https://i.ibb.co/B2BcD9S/images.jpg',
        }}
        style={{ width: 250, height: 150, borderRadius: 10, }}
      />
    </View>
  );
}

function TortasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Tortas (Tortas Screen)</Text>
      <Image
        //Imagen Torta
        source={{
          uri: 'https://i.ibb.co/KLHc2Yk/image.png',
        }}
        style={{ width: 250, height: 150 }}
      />
    </View>
  );
}

function TacosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Tacos (Tacos Screen)</Text>
      <Image
        //Imagen Taco
        source={{
          uri: 'https://i.ibb.co/pnHCRDV/tacos-polvo.jpg',
        }}
        style={{ width: 250, height: 150 }}
      />
    </View>
  );
}

function TostadasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Tostadas (Tostadas Screen)</Text>
      <Image
        //Imagen Tostada
        source={{
          uri: 'https://i.ibb.co/n00bmmF/image.png',
        }}
        style={{ width: 250, height: 150 }}
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
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
        console.log("Inicio Sesion");
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
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}><Text>Login</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.btn}><Text>Registrarse</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function SignUpScreen({ navigation }) {
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
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
        navigation.goBack();
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Inicio Sesion");
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: (props) => null }} />
        <Stack.Screen name="Tortas" component={TortasScreen} />
        <Stack.Screen name="Tacos" component={TacosScreen} />
        <Stack.Screen name="Tostadas" component={TostadasScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
export default function App() {
  return <LoginScreen />;
}*/

/*const styles = StyleSheet.create({
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
    fontFamily: "sans",
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 32,
    color: "#383838",
    alignItems: "center",
  },
});
*/
//------------------------------------------------------
//Este codigo no hace nada
function Principal() {
  return (
    <View style={styles.container}>
      <Text>Cuponera: Principal</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//------------------------------------------------------