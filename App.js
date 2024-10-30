import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Layaut from './components/Layaut';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import ProfileRoute from './routes/ProfileRoute';
import AlbumRoute from './routes/AlbumRoute';
import FichRoute from './routes/FichRoute';
import HomeRoute from './routes/HomeRoute';
import SettingsRoute from './routes/SettingsRoute';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.5)',
          tabBarInactiveBackgroundColor: 'rgba(255, 255, 255, 0.5)', // трошки прозорий білий
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.0)', // прозорий фон для таббара
            //borderRadius: 15, // закруглені краї
            margin: 10, // відступи з країв екрану
            //marginBottom: 20, // відступ від низу
            height: 40, // висота таббара
            shadowColor: '#000', // колір тіні
            shadowOffset: {width: 0, height: 5}, // зміщення тіні
            shadowOpacity: 0.3, // прозорість тіні
            shadowRadius: 10, // розмиття тіні
            elevation: 5, // висота тіні для Android
          },
        }}>
        <Tab.Screen
          name="ProfileRoute"
          component={ProfileRoute}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                {props.children}
              </TouchableOpacity>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('./assets/icons/model.png')}
                  style={{
                    width: focused ? 70 : 40,
                    height: focused ? 70 : 40,
                    //tintColor: focused ? '#fbc02e' : '#6469a9',
                  }}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="FichRoute"
          component={FichRoute}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                {props.children}
              </TouchableOpacity>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('./assets/icons/location.png')}
                  style={{
                    width: focused ? 70 : 40,
                    height: focused ? 70 : 40,
                    //tintColor: focused ? '#fbc02e' : '#6469a9',
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="HomeRoute"
          component={HomeRoute}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                {props.children}
              </TouchableOpacity>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('./assets/icons/home.png')}
                  style={{
                    width: focused ? 70 : 40,
                    height: focused ? 70 : 40,
                    //tintColor: focused ? '#fbc02e' : '#6469a9',
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="AlbumRoute"
          component={AlbumRoute}
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                style={{
                  flex: 1,
                  marginRight: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {props.children}
              </TouchableOpacity>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('./assets/icons/gallery.png')}
                  style={{
                    width: focused ? 70 : 40,
                    height: focused ? 70 : 40,
                    //tintColor: focused ? '#fbc02e' : '#6469a9',
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="SettingsRoute"
          component={SettingsRoute}
          options={{
            tabBarButton: props => (
              <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                {props.children}
              </TouchableOpacity>
            ),
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('./assets/icons/settings.png')}
                  style={{
                    width: focused ? 70 : 40,
                    height: focused ? 70 : 40,
                    //tintColor: focused ? '#fbc02e' : '#6469a9',
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

{
  /**
  
  <LinearGradient
                  colors={['red', 'blue']} // градієнт від синього до червоного
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{
                    width: windowWidth / 6,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: '#fbc02e',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></LinearGradient>
  */
}
