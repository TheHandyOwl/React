import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

import * as webservices from 'RepasoParaProbar/src/webservices/webservices';
import { Colors } from 'RepasoParaProbar/src/commons'


/*************** COMPONENTS ***************/
import HousesList from 'RepasoParaProbar/src/sections/houses/HousesList';
import CharactersList from 'RepasoParaProbar/src/sections/characters/CharactersList';
import CharacterDetail from 'RepasoParaProbar/src/sections/characters/CharacterDetail';
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
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene
                key={ 'HousesList' }
                component={ HousesList }
                title='Houses List'
                hideNavBar
            />
            <Scene
                key={ 'CharactersList' }
                component={ CharactersList }
                title='Characters List'
                navigationBarStyle={ styles.navBar }
                navBarButtonColor={ Colors.white }
            />
            <Scene
                key={ 'CharacterDetail' }
                component={ CharacterDetail }
                title='Character Detail'
                navigationBarStyle={ styles.navBar }
                navBarButtonColor={ Colors.white }
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.navBar,
  }
});
