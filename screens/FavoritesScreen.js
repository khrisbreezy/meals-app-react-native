import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText';


const FavoriteScreen = (props) => {

  const FAVEMEALS = useSelector(state => state.meals.favoriteMeals);

  if (FAVEMEALS.length === 0 || !FAVEMEALS) {
    return <View style={styles.content}>
      <DefaultText>
        No favorites meals found!!!
      </DefaultText>
    </View>
  } else {
    return (
        <MealList selectedMeals={FAVEMEALS} navigation={props.navigation}  />
    )
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 }
});


export default FavoriteScreen;