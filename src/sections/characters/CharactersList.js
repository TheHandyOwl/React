import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from 'RepasoParaProbar/src/commons';
import { Actions } from 'react-native-router-flux'

import CharactersCell from './CharactersCell'

// redux
import { connect } from 'react-redux';
import * as CharactersActions from 'RepasoParaProbar/src/redux/actions/characters';


class CharactersList extends Component {


    componentWillMount(){
        const houseId = this.props.house ? this.props.house.id : null
        this.props.fetchCharactersList(houseId)
    }

    onSelectItem(character) {
        this.props.updateSelected(character)
    }

    renderFooter() {
        return <ActivityIndicator
                    animating={this.props.isFetching}
                    size="large"
                    color="grey"
                    style={{ marginVertical: 20 }}
                />
    }

    renderItem(item, index) {
        return (
            <CharactersCell
                item={item}
                onSelectItem={ (character) => this.onSelectItem(character) }
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    // Header o Footer, pero a mi me sale el activity arriba de las 2 formas
                    //ListHeaderComponent = { () => this.renderHeader() }
                    ListFooterComponent = { () => this.renderFooter()}
                    renderItem          = { ( { item, index } ) => this.renderItem(item, index) }
                    // Para forzar el repintado en el FlatList
                    extraData           = {this.props}
                    // Esto quita uno de los warning
                    keyExtractor        = { (item, index) => item.id }
                    numColumns          = {1}
                />
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        house: state.houses.item,
        list: state.characters.list,
        character: state.characters.item,
        isFetching: state.characters.isFetching,
    }
}

mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: (houseId) => {
            dispatch(CharactersActions.fetchCharactersList(houseId))
        },
        updateSelected: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterDetail( { title: character.nombre } )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CharactersList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 20,
        paddingTop: 60,
    }
});
