import { Text, View } from "react-native"
import { IRecentExpenses } from "../../constants/interfaces/interfaces"
import styles from "./styles"

const RecentExpenses: React.FC<IRecentExpenses> = () => {

    return (
        <View style={styles.rootContainer} >
            <Text>Recent Expense</Text>
        </View>
    )

}

export default RecentExpenses