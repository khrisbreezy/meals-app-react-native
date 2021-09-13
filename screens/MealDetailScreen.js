import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const MealDetailScreen = (props) => {
  const goBack = () => {
    props.navigation.popToTop();
  }


  return (
    <View style={styles.screen}>
      <Text>The meal details page</Text>
      <Button title="Back to top page" onPress={goBack} />
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

export default MealDetailScreen;