import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

const LoadingOverlay = () => {
    return (
        <View style={styles.container} >
            <ActivityIndicator size={"large"} color={'black'} />
        </View>
    )

}

export default LoadingOverlay