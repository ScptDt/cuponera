import { StyleSheet, Platform } from "react-native";

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
    fontSize: 50,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#383838",
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    fontSize: 28,
    fontWeight: "500",
    color: "#383838",
  },
  textote: {
    color: "#383838",
    fontSize: 40
  },
  productos: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 15,
    backgroundColor: "#B7A969BA",
    lineHeight: 32,
    margin: 15,
  },
  encabezado: {
    color: "#383838",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
    paddingTop: 5,
    paddingLeft: 10,
  },
  descripcion: {
    color: "#383838",
    fontSize: 13,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
    paddingLeft: 13,
    marginBottom: 10,
  },
  descripcion1: {
    color: "#383838",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
    paddingLeft: 15,
  },
  productodesc: {
    width: 300,
    height: 120,
    borderRadius: 10,
  },
  flechita: {
    alignItems: "flex-end",
    paddingRight: 20,
    marginTop: -15,
    marginBottom: -5
  },
  selec_c: {
    borderWidth: 1,
    borderColor: '#777',
    color: '#000000',
    backgroundColor: "#E5E5E9",
    lineHeight: 32,
    margin: 20,
    padding: 5,
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