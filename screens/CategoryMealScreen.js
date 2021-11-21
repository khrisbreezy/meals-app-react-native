import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';


const CategoriesMealScreen = (props) => {

  const MEALS = useSelector(state => state.meals.filteredMeals);

  const catId = props.navigation.getParam('categoryId');

  const selectedMeals = MEALS.filter(meal => meal.catIds.indexOf(catId) >= 0);

  const goBack = () => {
    props.navigation.pop();
  }

  if (selectedMeals.length === 0 || !selectedMeals) {
    return  <View style={styles.content}>
    <DefaultText>
      No meals found!!!
    </DefaultText>
  </View>
  } else {
    return (
      <MealList selectedMeals={selectedMeals} navigation={props.navigation} />
    )
  }

};

CategoriesMealScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 }
});

export default CategoriesMealScreen;