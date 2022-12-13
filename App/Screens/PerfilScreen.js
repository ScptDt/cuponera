import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "../estilos";
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { Divider } from "react-native-paper";
import ConfirmationAlert from "./Alerta";

const Perfil = ({ navigation }) => {

  const [alertVisible, setAlertVisible] = useState(false);

  function toggleAlert() {
    setAlertVisible(!alertVisible);
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 15 }}>
        <View style={{ marginRight: 15 }}>
          <Text style={styles.textote}>Guerrero03</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Text style={[styles.descripcion, { color: 'blue', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Editar cuenta</Text>
            <FontAwesome name="pencil-square" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          //Imagen Perfil
          source={{
            uri: 'https://i.ibb.co/B2BcD9S/images.jpg',
          }}
          style={{ width: 120, height: 120, borderRadius: 80, }}
        />
      </View>
      <Divider />
      <View>
        <View style={[styles.selec_c, { borderRadius: 10 }]}>
          <Text style={[styles.descripcion, { fontSize: 16 }]}>Nombre de Usuario</Text>
          <Text style={styles.descripcion}>Guerrero03</Text>
        </View>
        <View style={[styles.selec_c, { borderRadius: 10 }]}>
          <Text style={[styles.descripcion, { fontSize: 16 }]}>Correo electronico</Text>
          <Text style={styles.descripcion}>guerrero03@gmail.com</Text>
        </View>
        <View style={[styles.selec_c, { borderRadius: 10 }]}>
          <Text style={[styles.descripcion, { fontSize: 16 }]}>Contraseña</Text>
          <Text style={styles.descripcion}>*****************</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 15 }}>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
          toggleAlert();
        }}>
          <Text style={[styles.descripcion, { color: 'red', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Eliminar cuenta</Text>
          <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ConfirmationAlert
        title="Eliminar cuenta"
        message="Esta seguro de eliminar su cuenta?"
        visible={alertVisible}
        buttons={[
          {
            text: "Continuar", onPress: () => {
              toggleAlert();
              navigation.navigate('Login');
            }
          },
        ]}
      />
    </ScrollView>
  );
}

export default Perfil;