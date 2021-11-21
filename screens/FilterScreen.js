import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';


const FilterSwitch = ({label, state, stateChange}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
      trackColor={{
        false: '#ccc',
        true: Colors.secondaryColor
      }}
      thumbColor={Platform.OS === 'android' ? Colors.secondaryColor : ''}
      value={state}
      onValueChange={val => stateChange(val)} />
    </View>
  )
};

const FilterScreen = (props) => {
  const { navigation } = props;

  const [isGluten, setIsGluten] = useState(false);
  const [isLactose, setIsLactose] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGluten,
      lactoseFree: isLactose,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
  }, [isGluten, isLactose, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({save: saveFilter})
  }, [saveFilter]);

    return (
        <View style={styles.screen}>
          <DefaultText style={styles.title}>Available Fiters / Restrictions</DefaultText>
          <FilterSwitch label="Gluten Free" state={isGluten} stateChange={setIsGluten} />
          <FilterSwitch label="Lactose Free" state={isLactose} stateChange={setIsLactose} />
          <FilterSwitch label="Vegan" state={isVegan} stateChange={setIsVegan} />
          <FilterSwitch label="Vegetarian" state={isVegetarian} stateChange={setIsVegetarian} />
        </View>
    )
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filters',
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
      </HeaderButtons>)
    },
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>)
    }

  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    margin: 20
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 15
  }
});

export default FilterScreen;