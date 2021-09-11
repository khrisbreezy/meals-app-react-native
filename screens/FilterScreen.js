import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const FilterScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The filters page</Text>
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

export default FilterScreen;