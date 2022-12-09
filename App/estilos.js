import { StyleSheet} from "react-native";

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
        fontFamily: "sans",
        fontSize: 32,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 32,
        color: "#383838",
        alignItems: "center",
      },
});