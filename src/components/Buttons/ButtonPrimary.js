import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';

const ButtonPrimary = ({width, onPress, title, disable}) => {
  return (
    <TouchableOpacity
      style={[
        disable ? styles.buttonContainerDisabled : styles.buttonContainer,
        {width: width},
      ]}
      onPress={onPress}
      disabled={disable}>
      <Text style={disable ? styles.titleDisabled : styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 100,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: Colors.black,
  },
  buttonContainerDisabled: {
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 100,
  },
  titleDisabled: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: Colors.white,
  },
});
