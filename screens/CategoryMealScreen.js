import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoriesMealScreen = (props) => {

  const catId = props.navigation.getParam('categoryId');

  const selectedMeals = MEALS.filter(meal => meal.catIds.indexOf(catId) >= 0);

  const goBack = () => {
    props.navigation.pop();
  }

  return (
    <MealList selectedMeals={selectedMeals} navigation={props.navigation} />
  )
};

CategoriesMealScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }

}

export default CategoriesMealScreen;