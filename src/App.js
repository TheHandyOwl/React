import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

import * as webservices from 'RepasoParaProbar/src/webservices/webservices';

import HousesList from 'RepasoParaProbar/src/sections/houses/HousesList';

export default class App extends Component {

  componentWillMount() {
    webservices.configureAxios()
    StatusBar.setBarStyle('light-content') // iOS StatusBar light style
  }

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
              key={ 'HousesList' }
              component={ HousesList }
              title='Houses List'
              hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});
