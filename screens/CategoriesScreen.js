import React from 'react';
import { View, StyleSheet, FlatList, Button, Text, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesScreen = (props) => {

  const renderItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={gotoMealPage}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

    const gotoMealPage = () => {
      props.navigation.navigate('CategoriesMeal')
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Colors.primaryColor
  }
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