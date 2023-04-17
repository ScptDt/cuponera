import { Text, TextInput, View, TouchableOpacity, Image, Share } from "react-native";
import styles from "../estilos";
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import ConfirmationAlert from "./Alerta";
import { Divider } from "react-native-paper";

const AgregarCupon = ({ navigation }) => {
    const [alertVisible, setAlertVisible] = useState(false);
    function toggleAlert() {
        setAlertVisible(!alertVisible);
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.descripcion}>Imagen del Cupon (Opcional):</Text>
                    <TouchableOpacity>
                        <Image
                            //Logo de la App
                            source={{
                                uri: 'https://i.ibb.co/DCRYn13/image.png',
                            }}
                            style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.descripcion}>Titulo:</Text>
                    <TextInput
                        style={styles.txt_spc}
                        placeholder='Titulo'
                    />
                    <Text style={styles.descripcion}>Categoria:</Text>
                    <TextInput
                        style={styles.txt_spc}
                        placeholder='Categoria'
                    />
                    <Text style={styles.descripcion}>Descripcion:</Text>
                    <TextInput
                        style={styles.txt_spc}
                        placeholder='Descripcion'
                    />
                    <Text style={styles.descripcion}>Vegencia:</Text>
                    <TextInput
                        style={styles.txt_spc}
                        placeholder='Fecha de Inicio'
                    />
                    <TextInput
                        style={styles.txt_spc}
                        placeholder='Fecha de Final'
                    />

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    toggleAlert();
                }}>
                    <Text style={[styles.descripcion, { color: 'blue', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Agregar Cupon</Text>
                    <FontAwesome name="pencil-square" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ConfirmationAlert
                title="Agregar Cupon"
                message="Desea guardar el cupon?"
                visible={alertVisible}
                buttons={[
                    {
                        text: "Si", onPress: () => {
                            toggleAlert();
                            navigation.navigate('InicioEmpresa');
                        }
                    },
                    {
                        text: "No", onPress: () => {
                            toggleAlert();
                        }
                    },
                ]}
            />
        </ScrollView>
    );
}

export default AgregarCupon;