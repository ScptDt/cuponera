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
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
          style={{ margin: 15 }}
        />
      </View>
      <Divider style={{
        margin: 5,
        width: 5,
      }} />
      <View style={{ margin: 15 }}>
        <Text style={styles.descripcion1}>Seleccione una opción</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Tortas')} >
          <View style={styles.productos}>
            <Image
              //Imagen Torta
              source={{
                uri: 'https://i.ibb.co/KLHc2Yk/image.png',
              }}
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tortas "Morbius"</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
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
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tacos "Polvo"</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
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
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tostadas “El Brayan”</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
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
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tostadas “El Brayan 2”</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <Text style={styles.descripcion}>Tan tremendas como las primeras!!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          //Imagen Tortas
          source={{
            uri: 'https://i.ibb.co/KLHc2Yk/image.png',
          }}
          style={{ width: 250, height: 150, borderRadius: 10, margin: 15 }}
        />
        <Text style={styles.textote}>Tortas "Morbius"</Text>
        <Text style={styles.descripcion}>It's Tortas Time!!!</Text>
      </View>
      <Divider style={{ margin: 10, }} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textote}>Cupones disponibles</Text>
        <TouchableOpacity>
          <Text style={styles.selec_c}>Obten 2x1 en la torta "Morbius"</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.selec_c}>Obten 35% de descuento en el combo "Morbius"</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function TacosScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          //Imagen Tacos
          source={{
            uri: 'https://i.ibb.co/pnHCRDV/tacos-polvo.jpg',
          }}
          style={{ width: 250, height: 150, borderRadius: 10, margin: 15 }}
        />
        <Text style={styles.textote}>Tacos Polvo</Text>
        <Text style={styles.descripcion}>Los mejores tacos de todo Navojoa</Text>
      </View>
      <Divider style={{ margin: 10, }} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textote}>Cupones disponibles</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cupon')}>
          <Text style={styles.selec_c}>Obten 20% de descuento en la parrilla de tacos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cupon')}>
          <Text style={styles.selec_c}>Obten 2x1 en una orden de tacos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cupon')}>
          <Text style={styles.selec_c}>Obten una bebida gratis al adquirir una orden de tacos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function TostadasScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          //Imagen Tostada
          source={{
            uri: 'https://i.ibb.co/n00bmmF/image.png',
          }}
          style={{ width: 250, height: 150, borderRadius: 10, margin: 15 }}
        />
        <Text style={styles.textote}>Tostadas "El Brayan"</Text>
        <Text style={styles.descripcion}>Estan tremendas!!!</Text>
      </View>
      <Divider style={{ margin: 10, }} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textote}>Cupones disponibles</Text>
        <TouchableOpacity>
          <Text style={styles.selec_c}>Obten 35% de descuento en una orden de tostadas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.selec_c}>Obten una bebida gratis en la compra de 2 tostadas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function CuponScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textote}>Aqui esta su cupon:</Text>
        <Image
          //Imagen Tacos
          source={{
            uri: 'https://i.ibb.co/d4Ghx75/qr.png',
          }}
          style={{ width: 250, height: 250, borderRadius: 5, margin: 15 }}
        />

        <Text style={styles.descripcion}>Valido hasta el 30/05/2023 a las 20:00 horas</Text>
      </View>

      <View style={{ alignItems:"center"}}>
              <Feather name="share" size={46} color="black" />
      </View>

      <View style={{ alignItems:"center", margin:15,}}>
        <Text style={styles.encabezado}> Comparte el codigo con tus amigos!</Text>  
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between',  }}>
        <Image
          //Logo de la App
          source={{
            uri: 'https://i.ibb.co/DCRYn13/image.png',
          }}
          style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
        />
        <TouchableOpacity>
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
    </ScrollView>
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
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.btn}><Text style={styles.btntext}>Inicia Sesión</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.btn}><Text style={styles.btntext}>Registrarse</Text></TouchableOpacity>
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
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerLeft: (props) => null }} />
        <Stack.Screen name="Tortas" component={TortasScreen} />
        <Stack.Screen name="Tacos" component={TacosScreen} />
        <Stack.Screen name="Tostadas" component={TostadasScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Cupon" component={CuponScreen} />
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