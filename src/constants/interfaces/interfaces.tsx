// import { NavigationProp } from '@react-navigation/native';
import {ReactNode} from 'react';
import { ViewStyle } from 'react-native';

export interface IAllExpenses {

}

export interface IRecentExpenses {

}

export interface IExpenseList {
    onPress: () => void
    screenName?: string,
}
export interface IAddExpense {
    navigation? : any

}
export interface IPrimaryButton {
    text: string;
    onPress: ()=> void;
}
export interface IEditExpenseWrapper {
    screenName: string
    children?: React.ReactNode
}
export interface IExpenseContextProvider {
    children: React.ReactNode
}
export interface IExpenseDetails {
    id?: string,
    name?: string,
    date?: string,
    price?: string,
}