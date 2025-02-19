import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import AlehouseHeader from '../components/AlehouseHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <AlehouseHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Sumo Grand', '01.04 14:00', 'Hakuho \n' + 'Terunofuji')}
        {renderBroadcast('Snooker', '03.04 16:45', 'Finals \n' + 'Ronnie O’Sullivan')}
        {renderBroadcast('Darts Premier', '05.04 18:15', 'Michael van Gerwen \n' + 'Peter Wright')}
        {renderBroadcast('Badminton Open', '07.04 15:30', 'Kento Momota \n' + 'Viktor Axelsen')}
        {renderBroadcast('Table Cup', '09.04 14:45', 'Finals \n' + 'Fan Zhendong')}
        {renderBroadcast('Handball', '11.04 17:30', 'Germany \n' + 'Sweden')}
        {renderBroadcast('Water Polo', '13.04 19:00', 'USA \n' + 'Serbia')}
        {renderBroadcast('Field Hockey', '15.04 16:15', 'Netherlands \n' + 'Australia')}
        {renderBroadcast('Rowing', '17.04 14:30', 'Men’s Eight \n' + 'Final')}
        {renderBroadcast('E-Sports', '19.04 21:00', 'G2 Esports \n' + 'T1')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
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
