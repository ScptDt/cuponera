import { Text, View, TouchableOpacity, Image } from "react-native";
import { Searchbar, Divider } from 'react-native-paper';
import React from "react";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import styles from '../estilos.js';

const Home = ({ navigation }) => {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            //Logo de la App
            source={{
              uri: 'https://i.ibb.co/DCRYn13/image.png',
            }}
            style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
          />
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
          <Text style={styles.descripcion1}>Seleccione una opción</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <TouchableOpacity onPress={() => navigation.navigate('Tortas')} >
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
  
          <TouchableOpacity onPress={() => navigation.navigate('Tacos')} >
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
  
          <TouchableOpacity onPress={() => navigation.navigate('Tostadas')} >
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
  
          <TouchableOpacity onPress={() => navigation.navigate('Tostadas')} >
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
      </ScrollView>
    );
  }

export default Home;