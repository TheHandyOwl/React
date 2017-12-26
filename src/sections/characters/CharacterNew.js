import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors } from 'RepasoParaProbar/src/commons'

// Redux
import { connect } from 'react-redux';
import * as CharactersActions from 'RepasoParaProbar/src/redux/actions/characters'

class CharacterNew extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>CharacterNew</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect (null, null) (CharacterNew)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
})
