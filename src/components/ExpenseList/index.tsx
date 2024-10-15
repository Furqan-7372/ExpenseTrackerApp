import {
  FlatList,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {IExpenseList} from '../../constants/interfaces/interfaces';
import styles from './styles';
import {useContext, useState} from 'react';
import {ExpenseContext} from '../../../store/context/context';
import { fetchExpenses } from '../../https';

const ExpenseList: React.FC<IExpenseList> = ({onPress, screenName}) => {
  let expenseItemCtx = useContext(ExpenseContext);
  let recentExpenses = expenseItemCtx

  const [search, setSearch] = useState('');

  const screenDecider = () => {
    if (screenName === 'Recent') {
      recentExpenses.expenses = recentExpenses.expenses.filter(item => {
        return item.price > 30;
      })
      return recentExpenses.expenses
    }
    else if (screenName === 'All')
    {
      return expenseItemCtx.expenses
    }
  }

  
  const searchHandler = () => {
    const dataToDisplay = screenDecider()

    if (search.length == 0) {
      return dataToDisplay;
    } else {
      return dataToDisplay?.filter(item =>
        item?.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // if (search.length != 0)
    // {
    //   return searchResult
    // }
    // else
    // {
    //   return dataInList
    // }
  };

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={styles.outerView}>
            <View style={styles.InnerView}>
              <View style={styles.nameTextContainer}>
                <Text style={styles.nameText}>{item?.name}</Text>
              </View>
              <View style={styles.dateTextContainer}>
                <Text style={styles.dateText}>{item?.date}</Text>
              </View>
            </View>
            <View style={styles.costTextContainer}>
              <Text style={styles.costText}>${item?.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const calculateTotal = () => {
    const Total = searchHandler().reduce((acc: number, cur) => {
      return acc + Number(cur.price);
    }, 0);
    return Total;
  };

  const totalCost = () => {
    return (
      <View>
        <View style={styles.headerComponent}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalCost}> ${calculateTotal()}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search Expense by Name"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={searchHandler()}
        renderItem={renderItem}
        ListHeaderComponent={totalCost}
      />
    </View>
  );
};

export default ExpenseList;
