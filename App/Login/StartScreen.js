import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "../estilos";
import React from "react";
import 'react-native-gesture-handler';

const Start = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={{ uri: 'https://i.ibb.co/hYJMkYb/sehizocanonsito.jpg' }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.Start}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
                        <Text style={styles.btntext}>Inicia Sesion</Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', marginTop:35 }}>
                        <Text style={[styles.descripcion, { fontSize: 20 }]}>Todavía no tienes cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                            <Text style={[styles.descripcion, { color: '#066163', textDecorationLine: 'underline', marginRight: 5, fontSize: 20 }]}>Registrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Start;