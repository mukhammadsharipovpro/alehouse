import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import AlehouseHeader from '../components/AlehouseHeader';
import AlehouseComponent from '../components/AlehouseComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'AlehouseHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <AlehouseHeader />

      <Text style={styles.text}>Спасибо за заказ!</Text>

      <View style={styles.imageBackground}>
        <Image
          style={styles.image}
          source={require('../assets/success_icon.png')}
        />
      </View>

      <View style={styles.qrContainer}>
        <QRCode
          value="https://www.facebook.com/pages/Preciados-38cafe-Bar-Sports-Pub-Madrid/155615264645208?nr"
          size={Dimensions.get('window').width / 2.5}
        />
      </View>

      <AlehouseComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 40,
    marginTop: '15%',
    paddingVertical: 15,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
  imageBackground: {
    width: width,
    paddingVertical: 20,
    marginTop: 20,
  },
});
