import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Insta from './Screens/insta';
import Fb from './Screens/fb';

const tabNavigator = createBottomTabNavigator({
  Facebook: {screen: Fb, navigationOptions:{tabBarIcon:({focused})=>{
    return focused ?<Ionicons name="logo-facebook" size={30} color="#4267B2" />
                   :<Ionicons name="logo-facebook" size={25} color="#000000" />
  }}},
  Instagram: {screen: Insta, navigationOptions:{tabBarIcon:({focused})=>{
    return focused
      ?(
        <LinearGradient
        colors={['#CA1D7E', '#E35157', '#F2703F']}
        style={{height: 30, width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10, top:2}}>
          <Ionicons name="logo-instagram" size={30} color="#ffffff" />
        </LinearGradient>
      )
      :<Ionicons name="logo-instagram" size={25} color="#000000" />
    }}}
}, {tabBarOptions:{labelStyle: {fontSize: 13}}})

const AppContainer = createAppContainer(tabNavigator);

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}