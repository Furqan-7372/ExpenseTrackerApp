import { StyleSheet } from "react-native";
import Colors from "../../constants/colors/colors";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
    },
    outerView: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.primary600,
        margin: 10,
        width: 350,
    },
    InnerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    nameTextContainer: {
        padding: 5,
        margin: 2,
    },
    nameText: {
        fontWeight: 'bold',
        color: Colors.primary0,
        fontSize: 18,
    },
    dateTextContainer: {
        padding: 5,
        margin: 2,
    },
    dateText: {
        fontSize: 16,
        color: Colors.primary0,
    },
    costTextContainer: {
        flex: 1,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary0,
    },
    costText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary700,
    },
    headerComponent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor,
        padding: 4,
        margin: 10,
        width: 350,
    },
    totalText: {
        color: Colors.primary500,
        fontSize: 20,
    },
    totalCost: {
        color: Colors.primary500,
        fontWeight: 'bold',
        fontSize: 20,
    },
    textInput: {
        backgroundColor: Colors.backgroundColor,
        width: 350,
        padding: 10,
        margin: 10,
    },
});

export default styles