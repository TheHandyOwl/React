import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default class Input extends Component {

    static defaultProps = {
        labelStyle: {},
        containerStyle: {},
        spinnerColor: 'white',
        label: '',
        onPress: () => {},
            isFetching: false,
    }
    
    render() {
            return (
                <View style={styles.container}>
                </View>
            )
        }
    }

    const styles = StyleSheet.create({

        container: {
            
        },

    })
