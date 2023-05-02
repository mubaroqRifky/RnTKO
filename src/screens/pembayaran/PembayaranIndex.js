import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavbarBottom from '../../layouts/NavbarBottom';

const PembayaranIndex = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <Text>PembayaranIndex</Text>
      </View>
      <NavbarBottom />
    </View>
  );
};

export default PembayaranIndex;

const styles = StyleSheet.create({});
