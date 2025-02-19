import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text} from 'react-native';
import AlehouseHeader from '../components/AlehouseHeader';
import AlehouseMenuComponent from '../components/AlehouseMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {memphisBBQ} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item}) => <AlehouseMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <AlehouseHeader />

      <Text style={styles.title}>Главная</Text>

      <FlatList
        data={memphisBBQ}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={1}
        horizontal={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'flex-end',
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    paddingVertical: 5,
  },
});
