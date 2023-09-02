import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import SupplierItem from './src/components/SupplierItem';
import Suppliers from "./assets/data/Suppliers.json"

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
       data={Suppliers}
       renderItem={({item}) => <SupplierItem supplier={item} />}
      />

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
