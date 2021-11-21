import React from 'react';
import { ScrollView, View, StyleSheet, Button, Text, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = ({children}) => {
  return <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
  </View>
}

const MealDetailScreen = (props) => {

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);


  const goBack = () => {
    props.navigation.popToTop();
  }

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
  const mealId = navData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favourite" iconName="md-heart" onPress={() => console.log('hello')} />
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