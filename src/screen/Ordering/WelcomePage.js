import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';
import {NavbarComponent} from '../../components';
import {Food1} from '../../../assets';
import {deviceWidth, deviceHeight} from '../../styles/Dimensions';

const WelcomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavbarComponent />
      <Image source={Food1} style={styles.bannerImage} resizeMode="cover" />
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bannerImage: {
    width: deviceWidth,
    height: deviceHeight * 0.434,
    top: -5,
  },
});
