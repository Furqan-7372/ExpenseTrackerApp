import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {IPrimaryButton} from '../../constants/interfaces/interfaces';
import styles from './styles';
import Colors from "../../constants/colors/colors";


const PrimaryButton: React.FC<IPrimaryButton> = props => {
  const {text, onPress} = props;
  return (
    <View>
      <Pressable 
        style={({pressed}) =>
            pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
       }
            onPress={onPress}
            android_ripple={{color: Colors.primary500}}
        >

            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    </View>
  );
};

export default PrimaryButton;
