import React from 'react';
import {ImageBackground, View} from 'react-native';

const Layaut = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/back/0_3_640_N.webp')}
        style={{flex: 1}}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Layaut;
