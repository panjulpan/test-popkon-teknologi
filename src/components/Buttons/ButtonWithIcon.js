import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';

const ButtonWithIcon = ({width, icon, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, {width: width}]}>
      {icon()}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 8,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: Colors.black,
    marginLeft: 10,
  },
});
