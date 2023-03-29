import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from '../../assets/icons';
import Colors from '../styles/Colors';

const NavbarComponent = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hai, Selamat Datang</Text>
      <TouchableOpacity onPress={onPress} style={styles.menuButton}>
        <Icon.Menu height={14} width={26} />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGreen,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
});
