import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Layaut from '../../components/Layaut';
import {COLORS} from '../../constants/Colors';

const HomeScreen = () => {
  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{fontSize: 60, color: COLORS.primary, textAlign: 'center'}}>
          Home
        </Text>
      </View>
    </Layaut>
  );
};

export default HomeScreen;
