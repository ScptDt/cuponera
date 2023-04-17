import { Text, View, TouchableOpacity, Image } from "react-native";
import { Searchbar, Divider } from 'react-native-paper';
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import styles from '../estilos.js';
import ConfirmationAlert from "./Alerta.js";

const HomeEmpresa = ({ navigation }) => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);

  function toggleAlert() {
    setAlertVisible(!alertVisible);
  }

  if (timesPressed == 10) {
    toggleAlert();
    setTimesPressed((current) => current - 10);
  } else if (timesPressed > 0) {
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => { setTimesPressed((current) => current + 1); }}>
          <Image
            //Logo de la App
            source={{
              uri: 'https://i.ibb.co/DCRYn13/image.png',
            }}
            style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} >
          <Image
            //Perfil
            source={{
              uri: 'https://i.ibb.co/B2BcD9S/images.jpg',
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              alignContent: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => console.log(text)}
          icon="magnify"
          style={{ margin: 1 }}
        />
      </View>
      <Divider style={{
        margin: 5,
        width: 5,
      }} />

      <View
      style={[
            styles.selec_c,
            {
              borderRadius: 10,
              justifyContent: "center",
            },
          ]}>
      <TouchableOpacity //Boton para agregar nuevo cupon
            onPress={() =>
              navigation.navigate("Agregar")
            }
          >
            <Text style={styles.descripcion2}>
              Agregar un Cupon
            </Text>
            <View style={styles.flechita_select}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
      </View>

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
        <Text style={styles.textotent}>Cupones Activos</Text>
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
              navigation.navigate("CuponEmp", {
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
              justifyContent: "center",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CuponEmp", {
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

      <ConfirmationAlert
        title="Easter Egg"
        message="ඞ"
        visible={alertVisible}
        buttons={[
          {
            text: "Continuar", onPress: () => {
              toggleAlert();
            }
          },
        ]}
      />
    </ScrollView>
  );
}

export default HomeEmpresa;

/*
<ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => { setTimesPressed((current) => current + 1); }}>
          <Image
            //Logo de la App
            source={{
              uri: 'https://i.ibb.co/DCRYn13/image.png',
            }}
            style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.descripcion1, { paddingTop: 20 }]}>
            NOMBRE DE LA EMPRESA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} >
          <Image
            //Perfil
            source={{
              uri: 'https://i.ibb.co/B2BcD9S/images.jpg',
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              alignContent: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => console.log(text)}
          icon="magnify"
          style={{ margin: 15 }}
        />
      </View>
      <Divider style={{
        margin: 5,
        width: 5,
      }} />
      <View style={{ margin: 15 }}>
        <Text style={styles.descripcion1}>Desayunos</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => navigation.navigate('TortasEmp')} >
          <View style={styles.productos}>
            <Image
              //Imagen Torta
              source={{
                uri: 'https://i.ibb.co/KLHc2Yk/image.png',
              }}
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tortas "Morbius"</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <Text style={styles.descripcion}>It's Tortas Time!!!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TacosEmp')} >
          <View style={styles.productos}>
            <Image
              //Imagen Taco
              source={{
                uri: 'https://i.ibb.co/pnHCRDV/tacos-polvo.jpg',
              }}
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tacos "Polvo"</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <Text style={styles.descripcion}>Los mejores tacos de todo Navojoa</Text>
          </View>
        </TouchableOpacity>

        <View style={{ margin: 15 }}>
          <Text style={styles.descripcion1}>Postres</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('TostadasEmp')} >
          <View style={styles.productos}>
            <Image
              //Imagen Tostada
              source={{
                uri: 'https://i.ibb.co/n00bmmF/image.png',
              }}
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tostadas “El Brayan”</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <Text style={styles.descripcion}>Estan tremendas!!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TostadasEmp')} >
          <View style={styles.productos}>
            <Image
              //Imagen Tostada
              source={{
                uri: 'https://i.ibb.co/n00bmmF/image.png',
              }}
              style={styles.productodesc}
            />
            <Text style={styles.encabezado}>Tostadas “El Brayan 2”</Text>
            <View style={styles.flechita}>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <Text style={styles.descripcion}>Tan tremendas como las primeras!!</Text>
          </View>
        </TouchableOpacity>

      </View>

      <ConfirmationAlert
        title="Easter Egg"
        message="ඞ"
        visible={alertVisible}
        buttons={[
          {
            text: "Continuar", onPress: () => {
              toggleAlert();
            }
          },
        ]}
      />

    </ScrollView>
    */