import React from 'react';
import { View, StyleSheet, FlatList, Button, Text, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = (props) => {

  const renderItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => gotoMealPage(itemData)}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

    const gotoMealPage = (itemData) => {
      props.navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150
    }
  });

export default CategoriesScreen;