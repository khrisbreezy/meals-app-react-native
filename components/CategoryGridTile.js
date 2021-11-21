import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = ({title, onSelect, color}) => {
    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <TouchableComponent style={styles.gridItem} onPress={onSelect}>
            <View style={{...{backgroundColor: color}, ...styles.container }}>
                <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
            </View>
        </TouchableComponent>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
    },
    container: {
        // height: '100%'
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'open-sans-bold',
        color: '#000'
    }
});

export default CategoryGridTile;