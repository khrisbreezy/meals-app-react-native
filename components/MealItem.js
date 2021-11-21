import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';

import DefaultText from './DefaultText';

const MealItem = ({title, onSelectMeal, duration, affordability, complexity, image}) => {
    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }



    return (
        <View style={styles.mealItem}>
            <TouchableComponent onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: image}} style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={2}>{title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <DefaultText>{duration}m</DefaultText>
                        <DefaultText style={styles.textCapitalize}>{complexity}</DefaultText>
                        <DefaultText style={styles.textCapitalize}>{affordability}</DefaultText>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    textCapitalize: {
        textTransform: 'capitalize'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
});

export default MealItem;
