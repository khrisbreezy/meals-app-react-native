// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const MealsNav = createStackNavigator({
//     Categories: CategoriesScreen,
//     CategoriesMeal: CategoriesMealScreen,
//     MealDetail: MealDetailScreen
// });

const MealsNav = () => {
    return (
        <CategoriesScreen />
        // <Stack.Navigator>
        //     <Stack.Screen name="Category Screen" component={CategoriesScreen} />
        // </Stack.Navigator>
    )
}

export default MealsNav;