import { Text, View, TouchableOpacity, Image } from "react-native";
import { Divider } from "react-native-paper";
import React from "react";
import "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../estilos";
import { Feather } from "@expo/vector-icons";

const Tostadas = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          //Imagen Tostada
          source={{
            uri: "https://i.ibb.co/n00bmmF/image.png",
          }}
          style={styles.img_select}
        />
        <Text style={styles.textote}>Tostadas "El Brayan"</Text>
        <Text style={[styles.descripcion, { fontSize: 16 }]}>
          Estan tremendas!!!
        </Text>
      </View>
      <Divider style={{ margin: 10 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.textotent}>Cupones disponibles</Text>
        <View
          style={[
            styles.selec_c,
            {
              borderRadius: 10,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Cupon", {
                Desc_C: "Obten 35% de descuento en una orden de tostadas",
                Cad_C: "Valido hasta el 15/04/2023 a las 13:00 horas",
              })
            }
          >
            <Text style={styles.descripcion2}>
              Obten 35% de descuento en una orden de tostadas
            </Text>
            <View style={styles.flechita_select}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.selec_c,
            {
              borderRadius: 10,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Cupon", {
                Desc_C: "Obten una bebida gratis en la compra de 2 tostadas",
                Cad_C: "Valido hasta el 15/04/2023 a las 15:00 horas",
              })
            }
          >
            <Text style={styles.descripcion2}>
              Obten una bebida gratis en la compra de 2 tostadas
            </Text>
            <View style={styles.flechita_select}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tostadas;
