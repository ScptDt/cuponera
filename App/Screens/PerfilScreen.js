import { Text, View, TouchableOpacity, Image} from "react-native";
import styles from "../estilos";
import React from "react";
import 'react-native-gesture-handler';

const Perfil = ({ navigation }) => {
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

export default Perfil;