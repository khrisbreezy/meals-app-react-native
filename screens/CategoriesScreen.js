import React from 'react';
import { View, StyleSheet, FlatList, Button, Text, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {

  const renderItem = (itemData) => {
    return (
      <CategoryGridTile
      title={itemData.item.title}
      onSelect={() => gotoMealPage(itemData)}
      color={itemData.item.color} />
    )
  }

    const gotoMealPage = (itemData) => {
      props.navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favourite" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
      </HeaderButtons>)
    }
  }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default CategoriesScreen;