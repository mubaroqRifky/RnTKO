import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavbarBottom = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);

  return (
    <View style={{elevation: 5, backgroundColor: '#fff', flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.navbarBottom}
        onPress={() => navigation.navigate('Home')}>
        <Icon
          name="home"
          size={20}
          color={route.name == 'Home' ? '#03a9f4' : 'gray'}
        />
        <Text style={{fontSize: 12}}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbarBottom}
        onPress={() => navigation.navigate('Penjualan')}>
        <Icon
          name="folder-open"
          size={20}
          color={route.name == 'Penjualan' ? '#03a9f4' : 'gray'}
        />
        <Text style={{fontSize: 12}}>Penjualan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbarBottom}
        onPress={() => navigation.navigate('Transaksi')}>
        <Icon
          name="heart"
          size={20}
          color={route.name == 'Transaksi' ? '#03a9f4' : 'gray'}
        />
        <Text style={{fontSize: 12}}>Transaksi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbarBottom}
        onPress={() => navigation.navigate('Customer')}>
        <Icon
          name="user"
          size={20}
          color={route.name == 'Customer' ? '#03a9f4' : 'gray'}
        />
        <Text style={{fontSize: 12}}>Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbarBottom}
        onPress={() => navigation.navigate('Pembayaran')}>
        <Icon
          name="cog"
          size={20}
          color={route.name == 'Pembayaran' ? '#03a9f4' : 'gray'}
        />
        <Text style={{fontSize: 12}}>Pembayaran</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavbarBottom;

const styles = StyleSheet.create({
  navbarBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 0,
  },
});
