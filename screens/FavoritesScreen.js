import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton'

const FavoriteScreen = (props) => {

  const selectedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList selectedMeals={selectedMeals} navigation={props.navigation}  />
    )
}

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorites",
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favourite" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
      </HeaderButtons>)
    }
  }
}


export default FavoriteScreen;