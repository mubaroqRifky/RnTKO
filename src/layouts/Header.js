import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderIndex = ({title, back = false, backHandler}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="gray" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 20,
          marginTop: 20,
          elevation: 5,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={back && backHandler}>
          <Icon name={back ? 'chevron-left' : 'bars'} size={25} color="gray" />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{title}</Text>
        </View>
        {!back && (
          <TouchableOpacity>
            <Icon name="search" size={25} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default HeaderIndex;

const styles = StyleSheet.create({});
