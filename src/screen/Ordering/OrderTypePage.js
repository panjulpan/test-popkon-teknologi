import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../styles/Colors';
import {ButtonPrimary, ButtonWithIcon} from '../../components';
import {Icon} from '../../../assets/icons';
import {DineIn, DineInPicked, TakeAway, TakeAwayPicked} from '../../../assets';
import {deviceHeight, deviceWidth} from '../../styles/Dimensions';

const OrderTypePage = ({navigation}) => {
  const [order, setOrder] = useState(null);

  const icon = () => {
    return <Icon.ArrowLeft width={14} height={14} />;
  };

  const orderHandler = data => {
    if (data === order) {
      setOrder(null);
    } else {
      setOrder(data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Makan di sini atau bawa pulang?</Text>
        </View>
        <View style={styles.buttonOrderContainer}>
          <TouchableOpacity
            style={styles.buttonOrder}
            onPress={() => orderHandler(1)}>
            <Image
              style={styles.imageButton}
              source={order === 1 ? DineInPicked : DineIn}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOrder}
            onPress={() => orderHandler(0)}>
            <Image
              style={styles.imageButton}
              source={order === 0 ? TakeAwayPicked : TakeAway}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWithIcon
          title="Kembali"
          width="38%"
          icon={icon}
          onPress={() => navigation.goBack()}
        />
        <ButtonPrimary
          title="Lanjutkan"
          width={'57%'}
          onPress={() => navigation.navigate('HomePage')}
          disable={order !== null ? false : true}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderTypePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  titleContainer: {paddingHorizontal: 50},
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
    lineHeight: 30,
  },
  buttonOrderContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonOrder: {
    width: deviceWidth * 0.383,
    height: deviceHeight * 0.2,
  },
  imageButton: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
