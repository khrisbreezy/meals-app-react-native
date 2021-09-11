import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNav = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeal: CategoriesMealScreen,
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNav);