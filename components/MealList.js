import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


import MealItem from './MealItem';

const MealList = ({selectedMeals, navigation}) => {

  const FAVEMEALS = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {

      const selectedFaveMealId = FAVEMEALS.some(meal => meal.id === itemData.item.id);
        return (
          <MealItem
          title={itemData.item.title}
          onSelectMeal={() => onSelectMealHandler(itemData, selectedFaveMealId)}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl} />
        )
    };

    const onSelectMealHandler = (itemData, selectedFaveMealId) => {
        navigation.navigate('MealDetail', {
          mealId: itemData.item.id,
          mealTitle: itemData.item.title,
          activeFave: selectedFaveMealId
        });
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