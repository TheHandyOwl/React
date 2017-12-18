import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

import * as webservices from 'RepasoParaProbar/src/webservices/webservices';


/*************** COMPONENTS ***************/
import HousesList from 'RepasoParaProbar/src/sections/houses/HousesList';
/******************************************/


/*************** REDUX ***************/
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from 'RepasoParaProbar/src/redux/reducers' // Nuestros reducers

const reducer = combineReducers(reducers) // Combinamos reducers si tenemos más de 1
const store = createStore ( // Creamos el store con:
  reducer,                  // - Nuestros reducer
  applyMiddleware(thunk)    // - Nuestro middleware
)
/*************************************/


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
