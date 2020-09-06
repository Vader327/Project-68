import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../Components/AppHeader';

export default class Fb extends React.Component{
    render(){
        return(
            <View>
                <AppHeader />
                <Text
                style={{fontSize: 20, fontWeight: '600', color:"#4267B2", alignSelf:'center', marginTop: 200,}}>
                    Facebook
                </Text>
            </View>
        )
    }
}
