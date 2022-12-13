import { Text, View, TouchableOpacity, Image, Share } from "react-native";
import styles from "../estilos";
import React from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Cupon = ({ route, navigation }) => {
    const { Desc_C, Cad_C } = route.params;

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: Desc_C,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <ScrollView>
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

            <TouchableOpacity onPress={onShare}>
                <View style={{ alignItems: "center" }}>
                    <Feather name="share" size={46} color="black" />
                </View>
            </TouchableOpacity>

            <View style={{ alignItems: "center", margin: 15, }}>
                <Text style={styles.encabezado}> Comparte el codigo con tus amigos!</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

                <TouchableOpacity style={{ paddingRight: 50 }}>
                    <FontAwesome5 name="facebook" size={46} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingLeft: 50 }}>
                    <FontAwesome name="whatsapp" size={46} color="black" />
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

export default Cupon;