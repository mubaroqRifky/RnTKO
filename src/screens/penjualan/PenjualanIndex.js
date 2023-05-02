import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavbarBottom from '../../layouts/NavbarBottom';

const PenjualanIndex = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <Text>PenjualanIndex</Text>
      </View>
      <NavbarBottom />
    </View>
  );
};

export default PenjualanIndex;

const styles = StyleSheet.create({});
