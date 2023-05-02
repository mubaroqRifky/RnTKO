import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavbarBottom from '../../layouts/NavbarBottom';

const ListTransaksiIndex = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <Text>ListTransaksiIndex</Text>
      </View>
      <NavbarBottom />
    </View>
  );
};

export default ListTransaksiIndex;

const styles = StyleSheet.create({});
