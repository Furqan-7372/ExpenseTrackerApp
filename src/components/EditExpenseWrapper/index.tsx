import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import {IEditExpenseWrapper} from '../../constants/interfaces/interfaces';
import styles from './styles';
import {useContext, useState} from 'react';
import PrimaryButton from '../PrimaryButton';
import {ExpenseContext} from '../../../store/context/context';
import ExpenseList from '../ExpenseList';
import React from 'react';

const EditExpenseWrapper: React.FC<IEditExpenseWrapper> = ({screenName}) => {
  let expenseItems = useContext(ExpenseContext);

  const [curId, setCurId] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);
  let [value, setValue] = useState({
    name: '',
    date: '',
    price: '',
  });

  const onPress = (item: any) => {
    setValue(item);

    setCurId(item.id);
    setModalVisible(!modalVisible);
  };

  const updateExpenseHandler = () => {
    expenseItems.updateExpense({...value, id: curId});
    setModalVisible(!modalVisible);
  };
  const removeExpenseHandler = () => {
    expenseItems.removeExpense(curId);
    setModalVisible(!modalVisible);
  };

  const valueSetter = () => {
    const index = expenseItems.expenses.findIndex(
      (element: any) => element.id == curId,
    );
    value = expenseItems.expenses[index];
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onPress}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitleContainer}></View>
          <Text style={styles.modalText}>Remove or Update</Text>

          <View>
            <Text>Enter Name</Text>
            <TextInput
              style={styles.textInput}
              value={value.name}
              placeholder={value.name}
              onChangeText={text =>
                setValue({name: text, date: value.date, price: value.price})
              }
            />
            <Text>Enter Date</Text>
            <TextInput
              style={styles.textInput}
              value={value.date}
              onChangeText={text =>
                setValue({name: value.name, date: text, price: value.price})
              }
            />
            <Text>Enter Price</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric" // Numeric keyboard
              value={value.price?.toString()}
              onChangeText={text =>
                setValue({
                  name: value.name,
                  date: value.date,
                  price: text,
                })
              }
            />
          </View>

          <View style={styles.modalInnerContainer}>
            <PrimaryButton text={'Remove'} onPress={removeExpenseHandler} />
            <PrimaryButton text={'Update'} onPress={updateExpenseHandler} />
          </View>
        </View>
      </Modal>
      <ExpenseList onPress={onPress} screenName={screenName} />
    </View>
  );
};

export default EditExpenseWrapper;
