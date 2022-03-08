//  phiêm bản 4x
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart'
import Orders from './screens/Orders'
import Settings from './screens/Settings'

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    Categories: {
        screen: Categories,
    },
    Category: {
        screen: Category,
    },
});
CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: (({ focused }) =>
        <Entypo name="home" size={24}
            // color="black" 
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    )

}

const CartStack = createStackNavigator({
    Cart: {
        screen: Cart,
    },
});
CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: (({ focused }) =>
        <Entypo name="shopping-cart" size={24}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    )
}

const OrdersStack = createStackNavigator({
    Orders: {
        screen: Orders,
    },
});
OrdersStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: (({ focused }) =>
        <FontAwesome5 name="jedi-order" size={24}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    )
}

// viết tắt
const SettingsStack = createStackNavigator({
    Settings,
});
SettingsStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: (({ focused }) =>
        <Ionicons name="settings" size={24}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    )
}

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    Cart: CartStack,
    OrdersStack,
    SettingsStack
})

export default createAppContainer(AppNavigator);

// //  phiên bản 6x

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Categories from './screens/Categories';
// import Category from './screens/Category';

// const Stack = createNativeStackNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//              name="Categories"
//              component={Categories}
//              options={({ route }) => ({ title: route.params.name })}
//          />
//         <Stack.Screen name="Category" component={Category} options={{title:'Category'}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigator;