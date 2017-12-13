import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      title: 'Título de la app',
      texto: 'Hola mundo'
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState( { title: 'Hemos cambiado el título'} );
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.title}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
