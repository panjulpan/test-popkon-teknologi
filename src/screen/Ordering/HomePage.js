import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';
import {Banner, Ellipse, FumeLogo} from '../../../assets';
import {deviceHeight, deviceWidth} from '../../styles/Dimensions';
import {Icon} from '../../../assets/icons';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={Ellipse}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <View style={styles.topcontainer}>
          <Image source={FumeLogo} style={styles.logo} resizeMode="cover" />
          <Text style={styles.topContainerTitle}>Fume Coffe & Kitchen</Text>
        </View>
        <Image source={Banner} style={styles.banner} resizeMode="stretch" />
        <View style={styles.separatorContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.separatorContent}>Siapakah Anda?</Text>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon.People height={14} width={14} />
            <Text style={styles.buttonText}>Member</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon.Edit height={14} width={14} />
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text style={styles.footer}>Bukan Member</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageBackground: {
    width: deviceWidth,
    height: deviceHeight * 0.18,
    position: 'absolute',
    top: -10,
  },
  contentContainer: {
    flex: 1,
  },
  topcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginTop: 40,
    marginHorizontal: 25,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  logo: {
    width: deviceWidth * 0.2587,
    height: deviceHeight * 0.13,
  },
  topContainerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.black,
    flex: 0.7,
    marginLeft: 25,
  },
  banner: {
    marginHorizontal: 25,
    width: deviceWidth - 50,
    height: deviceHeight * 0.3145,
  },
  separatorContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  horizontalLine: {
    borderWidth: 1,
    flex: 0.42,
    borderColor: Colors.lightGrey,
  },
  separatorContent: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: Colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.475,
    height: deviceHeight * 0.127,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginLeft: 10,
    color: Colors.darkGrey,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: Colors.darkGrey,
  },
});
