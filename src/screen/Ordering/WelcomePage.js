import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
import Colors from '../../styles/Colors';
import {ButtonPrimary, ButtonWithIcon, NavbarComponent} from '../../components';
import {Food1, Food2, Food3, Indonesia, Inggris} from '../../../assets';
import {deviceWidth, deviceHeight} from '../../styles/Dimensions';
import {Icon} from '../../../assets/icons';

const WelcomePage = ({navigation}) => {
  const data = [
    {id: 1, image: Food1},
    {id: 2, image: Food2},
    {id: 3, image: Food3},
  ];
  const ref = useRef(null);
  const [languageModal, setLanguageModal] = useState(false);
  const [language, setLanguage] = useState('Indonesia');

  const renderItem = ({item}) => {
    return (
      <Image
        source={item.image}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    );
  };

  const icon = () => {
    return <Icon.Language width={14} height={14} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavbarComponent />
      <View>
        <Carousel
          layout="stack"
          ref={ref}
          data={data}
          renderItem={renderItem}
          autoplay={true}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth}
          loop={true}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer} />
        <Text style={styles.title}>Fume Coffee & Kitchen</Text>
        <Text style={styles.subtitle}>
          Semua menu kami hanya dibuat dari bahan baku yang mengikuti prosedur
          pengolahan yang halal, berkualitas dan ramah lingkungan.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWithIcon
          title="Bahasa"
          width="38%"
          icon={icon}
          onPress={() => setLanguageModal(true)}
        />
        <ButtonPrimary
          title="Mulai Pesanan"
          width={'57%'}
          onPress={() => navigation.navigate('OrderTypePage')}
          disable={false}
        />
      </View>
      <View>
        <Modal
          isVisible={languageModal}
          useNativeDriver={true}
          onBackdropPress={() => setLanguageModal(false)}
          style={styles.modalStyle}>
          <View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Pilih Bahasa</Text>
              <Text style={styles.modalSubtitle}>
                Bahasa apa yang Anda sukai?
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={
                    language === 'Indonesia'
                      ? styles.modalButtonPicked
                      : styles.modalButton
                  }
                  onPress={() => setLanguage('Indonesia')}>
                  <Image
                    source={Indonesia}
                    style={styles.flagNation}
                    resizeMode="cover"
                  />
                  <Text style={styles.modalButtonText}>Indonesia</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    language === 'English'
                      ? styles.modalButtonPicked
                      : styles.modalButton
                  }
                  onPress={() => setLanguage('English')}>
                  <Image
                    source={Inggris}
                    style={styles.flagNation}
                    resizeMode="cover"
                  />
                  <Text style={styles.modalButtonText}>English</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setLanguageModal(false)}>
              <Icon.Close width={16} height={16} />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
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
    top: -1,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    top: -50,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 30,
    flex: 1,
    paddingTop: '25%',
  },
  logoContainer: {
    height: 100,
    width: 100,
    borderRadius: 44,
    backgroundColor: Colors.white,
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.grey,
    textAlign: 'center',
    lineHeight: 25,
  },
  buttonContainer: {
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalStyle: {marginHorizontal: 40},
  modalContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeModalButton: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 100,
    width: 36,
    alignSelf: 'center',
  },
  modalTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 5,
  },
  modalSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.grey,
    textAlign: 'center',
  },
  modalButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  modalButton: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    alignItems: 'center',
    width: '40%',
    paddingVertical: 15,
    borderRadius: 35,
  },
  modalButtonPicked: {
    borderWidth: 1,
    borderColor: Colors.green,
    backgroundColor: Colors.lightGreySecond,
    alignItems: 'center',
    width: '40%',
    paddingVertical: 15,
    borderRadius: 35,
  },
  modalButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  flagNation: {height: 30, width: 30},
});
