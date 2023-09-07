import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SupplierDetailsPage from './src/screens/SupplierDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SupplierDetailsPage />
      {/* <HomeScreen /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#fff',
  },
});
