import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt_spc: {
    width: 356,
    height: 68,
    marginTop: 10,
    paddingLeft: 5,
    backgroundColor: "#E5E5E9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  btn: {
    marginTop: 10,
    width: 344,
    height: 56,
    borderRadius: 50,
    backgroundColor: "#CDBE78",
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 32,
    color: "#383838",
    alignItems: "center",
    justifyContent: "center",
  },
  textote: {
    fontSize: 40
  },
  productos: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
    backgroundColor: "#CDBE78",
    lineHeight: 32,
    margin: 5,
  },
  encabezado:{
    color: "#383838",
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
  },
  descripcion:{
    color: "#383838",
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
  },
  //Estilos de la webada del bryan
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    width: 330,
    height: 199,
    borderRadius: 500,
    alignSelf: 'center',
  },

  txt1: {
    fontSize: 20,
    backgroundColor: '#B7A969',
  },
  txt2: {
    fontSize: 16,
    backgroundColor: '#B7A969',
  },
  //Fin de estilos de la webada de bryan
});