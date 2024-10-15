import { StyleSheet } from "react-native";
import Colors from "../../constants/colors/colors";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitleContainer: {
        backgroundColor: Colors.primary200,
    },
    modalText: {
        fontSize: 40,
    },
    modalInnerContainer: {
        width: 230,
        height: 60,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'red',
    },
    textInput: {
        backgroundColor: Colors.backgroundColor,
        width: 250,
        padding: 10,
        margin: 10,
    },
});

export default styles