import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const CategoriesMealScreen = (props) => {

  const gotoMealPage = () => {
    props.navigation.navigate('MealDetail')
  }

  const goBack = () => {
    props.navigation.pop();
  }


    return (
        <View style={styles.screen}>
            <Text>The categories meal page</Text>
            <Button title={'Goto Meals Page'}  onPress={gotoMealPage} />
            <Button title="Go Back" onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CategoriesMealScreen;