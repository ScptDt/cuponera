import React from "react";
import { Alert } from "react-native";

const ConfirmationAlert = (props) => {
    React.useEffect(() => {
        if (props.visible) {
            Alert.alert(props.title, props.message, props.buttons);
        }
    }, [props.visible]);
    return null;
}
ConfirmationAlert.defaultProps = {
    title: "",
    message: "",
    buttons: [],
};

export default ConfirmationAlert;