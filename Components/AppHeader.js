import * as React from 'react';
import { Header } from 'react-native-elements';

export default class AppHeader extends React.Component {

  render() {
    return (
      <Header
        containerStyle={{backgroundColor: '#1F84D4',}}
        centerComponent={{
          text: "Buzz",
          style:{
            color: "#ffffff",
            fontSize: 24,
            fontWeight: '600',
          }}} />
    );
  }
}