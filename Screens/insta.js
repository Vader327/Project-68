import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppHeader from '../Components/AppHeader';

export default class Insta extends React.Component{
    render(){
        return(
            <View>
            <AppHeader />
            <LinearGradient
            colors={['#CA1D7E', '#E35157', '#F2703F']}
            start={[0,0],[1,0]}
            style={{alignItems: 'center', justifyContent: 'center', alignSelf:'center', marginTop: 200, width: 130, height: 30, borderRadius: 15,}}>
                <Text
                style={{fontSize: 20, fontWeight: '600',color: '#ffffff'}}>
                    Instagram
                </Text>
                </LinearGradient>
            </View>
        )
    }
}