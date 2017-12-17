import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

import HousesList from 'RepasoParaProbar/src/sections/houses/HousesList';

export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      title: 'Título de la app',
      texto: 'Hola mundo'
    }
  }

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
              key={ 'HousesList' }
              component={ HousesList }
              title='Houses List'
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});
