import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SupplierDetailsPage from './src/screens/SupplierDetailsScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrdersScreen';
import OrderDetails from './src/screens/OrderDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Basket /> */}
      {/* <ItemDetailsScreen /> */}
      {/* <SupplierDetailsPage /> */}
      {/* <HomeScreen /> */}
      {/* <OrderScreen/> */}
      <OrderDetails/>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#fff',
  },
});
