import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginIndex from './src/screens/auth/LoginIndex';
import SplashScreenIndex from './src/screens/splash/SplashScerenIndex';

import HomeIndex from './src/screens/home/HomeIndex';
import PenjualanIndex from './src/screens/penjualan/PenjualanIndex';
import TransaksiIndex from './src/screens/list-transaksi/ListTransaksiIndex';
import CustomerIndex from './src/screens/customer/CustomerIndex';
import PembayaranIndex from './src/screens/pembayaran/PembayaranIndex';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [firstInit, setFirstInit] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstInit(false);
    }, 3000);
  }, []);

  if (firstInit) {
    return <SplashScreenIndex />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginIndex} />

        <Stack.Screen name="Home" component={HomeIndex} />
        <Stack.Screen name="Penjualan" component={PenjualanIndex} />
        <Stack.Screen name="Transaksi" component={TransaksiIndex} />
        <Stack.Screen name="Customer" component={CustomerIndex} />
        <Stack.Screen name="Pembayaran" component={PembayaranIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
