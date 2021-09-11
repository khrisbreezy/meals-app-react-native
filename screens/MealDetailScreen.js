import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const MealDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The meal details page</Text>
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