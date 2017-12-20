import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from 'RepasoParaProbar/src/commons';

import HousesCell from './HousesCell'

// redux
import { connect } from 'react-redux';
import * as HousesActions from 'RepasoParaProbar/src/redux/actions/houses';

class HousesList extends Component {

    componentWillMount(){
        this.props.fetchHousesList()
    }

    onSelectItem(house) {
        this.props.updateSelected(house)
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
            <HousesCell
                item={item}
                onSelectItem={ (house) => this.onSelectItem(house) }
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
                    renderItem={ ( { item, index } ) => this.renderItem(item, index) }
                    // Para forzar el repintado en el FlatList
                    extraData={this.props}
                    // Esto quita uno de los warning
                    keyExtractor={ (item, index) => item.id }
                    numColumns={2}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.houses.list,
        selected: state.houses.item,
        isFetching: state.houses.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())
            // HousesActions.fetchHousesList() ← Aquí fuera no haría nada, no funcionaría
        },
        updateSelected: (house) => {
            dispatch(HousesActions.updateHouseSelected(house))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (HousesList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 20,
    }
    
});
