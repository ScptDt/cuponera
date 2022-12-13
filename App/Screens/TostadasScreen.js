import { Text, View, TouchableOpacity, Image } from "react-native";
import { Divider } from 'react-native-paper';
import React from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../estilos";

const Tostadas = ({ navigation }) => {
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

export default Tostadas;