import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors } from 'RepasoParaProbar/src/commons'

export default class CharacterNew extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>CharacterNew</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
})
