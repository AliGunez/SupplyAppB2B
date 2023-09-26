import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import SupplierDetailsPage from '../screens/SupplierDetailsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';

import { Foundation } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            />
        </Stack.Navigator>
    );
};


const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
            <Tab.Screen name = "Home" component={HomeStackNavigator} options={{tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />}}/>
            <Tab.Screen name = "Orders" component={OrderStackNavigator} options={{tabBarIcon: ({color}) => <Foundation name="list" size={24} color={color} />}}/>
            <Tab.Screen name = "Profile" component={OrderScreen} options={{tabBarIcon: ({color}) => <Foundation name="torso" size={24} color={color} />}}/>
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Suppliers" component={HomeScreen} />
            <HomeStack.Screen name="Supplier" component={SupplierDetailsPage} options={{ headerShown: false}}/>
            <HomeStack.Screen name="Item" component={ItemDetailsScreen} />
            <HomeStack.Screen name="Basket" component={Basket} />
        </HomeStack.Navigator>
    );
};
const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={OrderScreen} />
            <OrdersStack.Screen name="Order" component={OrderDetails}/>
        </OrdersStack.Navigator>
    );
};


export default RootNavigator;