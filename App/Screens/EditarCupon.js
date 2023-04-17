import { Text, TextInput, View, TouchableOpacity, Image, Share } from "react-native";
import styles from "../estilos";
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import ConfirmationAlert from "./Alerta";
import { Divider } from "react-native-paper";

const EditarCupon = ({ route, navigation }) => {
    const { Desc_C, Cad_C } = route.params;
    const [alertVisible, setAlertVisible] = useState(false);

    function toggleAlert() {
        setAlertVisible(!alertVisible);
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.textote}>Edicion de Cupon</Text>
                <Divider style={{ margin: 10 }} />
                <View style={{ justifyContent: 'space-between' }}>
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

                <Text style={styles.descripcion}>Descripcion:</Text>
                <TextInput
                    style={styles.txt_spc}
                    placeholder={Desc_C}
                />
                <Text style={styles.descripcion}>Vigencia:</Text>
                <TextInput
                    style={styles.txt_spc}
                    placeholder={Cad_C}
                />
            </View>

            <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center', margin: 15 }}>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() =>navigation.navigate("CuponEmp", {Desc_C, Cad_C})}>
                    <Text style={[styles.descripcion, { color: 'orange', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Volver</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    toggleAlert();
                }}>
                    <Text style={[styles.descripcion, { color: '#E14646', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Guardar Cambios</Text>
                    <FontAwesome name="trash-o" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ConfirmationAlert
                title="Guardar Cambios"
                message="Desea guardar los cambios?"
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

export default EditarCupon;

/*
<ScrollView>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={[styles.descripcion, { color: '#066163', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Editar Cupon</Text>
                    <FontAwesome name="pencil-square" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={styles.textote}>{Desc_C}</Text>
                <Image
                    source={{
                        uri: 'https://i.ibb.co/d4Ghx75/qr.png',
                    }}
                    style={{ width: 250, height: 250, borderRadius: 5, margin: 15 }}
                />

                <Text style={styles.descripcion}>{Cad_C}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 15 }}>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    toggleAlert();
                }}>
                    <Text style={[styles.descripcion, { color: 'orange', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Deshabilitar Cupon</Text>
                    <FontAwesome name="trash-o" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    toggleAlert();
                }}>
                    <Text style={[styles.descripcion, { color: '#E14646', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Eliminar Cupon</Text>
                    <FontAwesome name="trash-o" size={24} color="black" />
                </TouchableOpacity>

                <TextInput
                    style={styles.txt_spc}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.txt_spc}
                    placeholder="Password"
                />
            </View>

            <ConfirmationAlert
                title="Eliminar cupon"
                message="Desea eliminar este cupon?"
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
*/