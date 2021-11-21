import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorites } from '../store/actions/meals';

const ListItem = ({children}) => {
  return <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
  </View>
}

const MealDetailScreen = (props) => {
  const dispatch = useDispatch();

  const MEALS = useSelector(state => state.meals.meals);
  const FAVEMEALS = useSelector(state => state.meals.favoriteMeals);

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const selectedFaveMealId = FAVEMEALS.some(meal => meal.id === mealId);


  const goBack = () => {
    props.navigation.popToTop();
  }

  const toggleFaveHandler = useCallback(() => {
    dispatch(toggleFavorites(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFave: toggleFaveHandler});
  }, [toggleFaveHandler]);

  useEffect(() => {
    props.navigation.setParams({activeFave: selectedFaveMealId});
  }, [selectedFaveMealId]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText style={styles.textCapitalize}>{selectedMeal.complexity}</DefaultText>
          <DefaultText style={styles.textCapitalize}>{selectedMeal.affordability}</DefaultText>
      </View>
      <DefaultText style={styles.title}>Ingredients</DefaultText>
      {selectedMeal.indregients.map(((indregient, i) =>  <ListItem key={i}>{indregient}</ListItem>))}
      <DefaultText style={styles.title}>Steps</DefaultText>
      {selectedMeal.steps.map(((step, i) =>  <ListItem key={i}>{step}</ListItem>))}
    </ScrollView>
  )
};

MealDetailScreen.navigationOptions = (navData) => {
  // const mealId = navData.navigation.getParam('mealId');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const toggleFav = navData.navigation.getParam('toggleFave');
  const activeFave = navData.navigation.getParam('activeFave');

  return {
    headerTitle: navData.navigation.getParam('mealTitle'),
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favourite" iconName={activeFave ? `md-heart` : 'md-heart-outline'} onPress={toggleFav} />
      </HeaderButtons>)
    }
  }
}

const styles = StyleSheet.create({
  details: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 22,
    textAlign: 'center'
  },
  textCapitalize: {
    textTransform: 'capitalize'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;