import {View} from 'react-native';
import {IAllExpenses} from '../../constants/interfaces/interfaces';
import styles from './styles';
import ExpenseList from '../../components/ExpenseList';
import EditExpenseWrapper from '../../components/EditExpenseWrapper';

const AllExpenses: React.FC<IAllExpenses> = () => {

  return (
    <View style={styles.rootContainer}>
      <EditExpenseWrapper screenName={'All'} />
    </View>
  );
};

export default AllExpenses;
