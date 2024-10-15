import { View } from "react-native"
import { IRecentExpenses } from "../../constants/interfaces/interfaces"
import styles from "./styles"
import ExpenseList from '../../components/ExpenseList';
import EditExpenseWrapper from "../../components/EditExpenseWrapper";

const RecentExpenses: React.FC<IRecentExpenses> = () => {

    return (
        <View style={styles.rootContainer} >
             <EditExpenseWrapper screenName={"Recent"} />
        </View>
    )

}

export default RecentExpenses