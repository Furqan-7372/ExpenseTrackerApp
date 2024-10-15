import React, {useContext, useState} from 'react';
import {Alert, Modal, Text, Pressable, View, TextInput} from 'react-native';
import {IAddExpense} from '../../constants/interfaces/interfaces';
import styles from './styles';
import PrimaryButton from '../PrimaryButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ExpenseContext} from '../../../store/context/context';
import { storeExpense } from '../../https';

const AddExpense: React.FC<IAddExpense> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = React.useState({name: '', date: '', price: 0});

  let expenseItems = useContext(ExpenseContext);


  const modalOpener = () => {
    return setModalVisible(!modalVisible);
  };
  const onPress = () => {
    expenseItems.addExpense(value)
    setValue({name: '', date: '', price: 0})
    return setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          

          <View style={styles.modalTitleContainer}>

          <Text style={styles.modalText}>Add Expense</Text>
          
          <View>
          <Text>Enter Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text =>
                setValue({name: text, date: value.date, price: value.price})
              }
              />
            <Text>Enter Date</Text>
            <TextInput style={styles.textInput}
              onChangeText={text =>
                setValue({name: value.name, date: text, price: value.price})
              }
              />
            <Text>Enter Price</Text>
            <TextInput style={styles.textInput}
              keyboardType="numeric"  // Numeric keyboard
              // value={number !== null ? number.toString() : ''}
              onChangeText={text =>
                setValue({name: value.name, date: value.date, price: Number(text)})
              }
            />
          </View>
          <PrimaryButton text={'Add'} onPress={onPress} />
              </View>
        </View>
      </Modal>
      <Pressable onPress={modalOpener}>
        <Ionicons name="add" color="white" size={34} />
      </Pressable>
    </View>
  );
};

export default AddExpense;
