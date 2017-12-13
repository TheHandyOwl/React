import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

import Screen1 from 'RepasoParaProbar/src/Screen1';
import Screen2 from 'RepasoParaProbar/src/Screen2';

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
              key='screen1'
              component={Screen1}
          />
          <Scene
            initial='true'
            key='screen2'
            component={Screen2}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});
