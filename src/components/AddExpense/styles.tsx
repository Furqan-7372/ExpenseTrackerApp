import { StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/colors/colors";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    modalTitleContainer: {
        backgroundColor: Colors.primary0,
        padding: 50,
    },
    modalText: {
        fontSize: 40,
    },
    textInput: {
        backgroundColor: Colors.backgroundColor,
        width: 250,
        padding: 10,
        margin: 10,
    },
});

export default styles