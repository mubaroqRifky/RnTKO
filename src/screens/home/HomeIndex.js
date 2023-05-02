import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import NavbarBottom from '../../layouts/NavbarBottom';

const HomeIndex = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        {/* <StatusBar translucent backgroundColor="gray" barStyle="dark-content" /> */}
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            padding: 20,
            alignItems: 'center',
            overflow: 'hidden',
            ...styles.cardContainer,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'lightgray',
              borderRadius: 100,
            }}></View>

          <View>
            <Text>Benson</Text>
            <Text>8432597325</Text>
            <Text>Jawa Timur</Text>
          </View>
        </View>
      </View>
      <NavbarBottom />
    </View>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    elevation: 10,
    backgroundColor: 'white',
  },
});
