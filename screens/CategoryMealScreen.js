import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoriesMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const gotoMealPage = () => {
    props.navigation.navigate('MealDetail')
  }

  const goBack = () => {
    props.navigation.pop();
  }

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Text>The categories meal page</Text>
      <Button title={'Goto Meals Page'} onPress={gotoMealPage} />
      <Button title="Go Back" onPress={goBack} />
    </View>
  )
};

CategoriesMealScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesMealScreen;