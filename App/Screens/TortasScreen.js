import { Text, View, TouchableOpacity, Image } from "react-native";
import { Divider } from "react-native-paper";
import React from "react";
import "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../estilos";
import { Feather } from "@expo/vector-icons";

const Tortas = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          //Imagen Tortas
          source={{
            uri: "https://i.ibb.co/KLHc2Yk/image.png",
          }}
          style={styles.img_select}
        />
        <Text style={styles.textote}>Tortas "Morbius"</Text>
        <Text style={[styles.descripcion, { fontSize: 16 }]}>
          It's Tortas Time!!!
        </Text>
      </View>
      <Divider style={{ margin: 10 }} />
      <View style={{ flex: 1}}>
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
                Desc_C: "Obten 2x1 en la torta 'Morbius'",
                Cad_C: "Valido hasta el 31/04/2023 a las 15:00 horas",
              })
            }
          >
            <Text style={styles.descripcion2}>
              Obten 2x1 en la torta "Morbius"
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
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Cupon", {
                Desc_C: "Obten 35% de descuento en el combo 'Morbius'",
                Cad_C: "Valido hasta el 16/05/2023 a las 18:00 horas",
              })
            }
          >
            <Text style={styles.descripcion2}>
              Obten 35% de descuento en el combo "Morbius"
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

export default Tortas;
