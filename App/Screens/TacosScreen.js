import { Text, View, TouchableOpacity, Image } from "react-native";
import { Divider } from 'react-native-paper';
import React from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../estilos";

const Tacos = ({ navigation }) => {
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
                <TouchableOpacity onPress={() => navigation.navigate('Cupon', { Desc_C: "Obten 20% de descuento en la parrilla de tacos", Cad_C: "Valido hasta el 15/02/2023 a las 14:00 horas" })}>
                    <Text style={styles.selec_c}>Obten 20% de descuento en la parrilla de tacos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cupon', { Desc_C: "Obten 2x1 en una orden de tacos", Cad_C: "Valido hasta el 30/05/2023 a las 20:00 horas" })}>
                    <Text style={styles.selec_c}>Obten 2x1 en una orden de tacos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cupon', { Desc_C: "Obten una bebida gratis al adquirir una orden de tacos", Cad_C: "Valido hasta el 31/12/2022 a las 16:00 horas" })}>
                    <Text style={styles.selec_c}>Obten una bebida gratis al adquirir una orden de tacos</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Tacos;