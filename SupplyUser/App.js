import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import SupplierItem from './src/components/SupplierItem';
import Suppliers from "./assets/data/Suppliers.json"

export default function App() {
  return (
    <View style={styles.container}>
      {/* Supplier Item*/}
      <SupplierItem supplier={Suppliers[0]} />
      <SupplierItem supplier={Suppliers[1]} />
      <SupplierItem supplier={Suppliers[2]} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
