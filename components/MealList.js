import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';


import MealItem from './MealItem';
import { MEALS } from '../data/dummy-data';

const MealList = ({selectedMeals, navigation}) => {

    const renderMealItem = itemData => {
        return (
          <MealItem
          title={itemData.item.title}
          onSelectMeal={() => onSelectMealHandler(itemData)}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl} />
        )
    };

    const onSelectMealHandler = (itemData) => {
        navigation.navigate('MealDetail', {mealId: itemData.item.id});
    };

    return (
        <View style={styles.screen}>
            <FlatList style={{width: '100%'}}
            data={selectedMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem} />
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
  });

export default MealList;