import { Text, View, TouchableOpacity, Image } from "react-native";
import { Divider } from 'react-native-paper';
import React from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../estilos";

const Tortas = ({ navigation }) => {
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
                <TouchableOpacity onPress={() => navigation.navigate('Cupon', { Desc_C: "Obten 2x1 en la torta 'Morbius'", Cad_C: "Valido hasta el 31/04/2023 a las 15:00 horas" })}>
                    <Text style={styles.selec_c}>Obten 2x1 en la torta "Morbius"</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cupon', { Desc_C: "Obten 35% de descuento en el combo 'Morbius'", Cad_C: "Valido hasta el 16/05/2023 a las 18:00 horas" })}>
                    <Text style={styles.selec_c}>Obten 35% de descuento en el combo "Morbius"</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Tortas;