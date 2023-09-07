import { StyleSheet, FlatList, View} from 'react-native';
import SupplierItem from '../../components/SupplierItem';
import Suppliers from "../../../assets/data/Suppliers.json"

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
       data={Suppliers}
       renderItem={({item}) => <SupplierItem supplier={item} />}
       showsVerticalScrollIndicator={false}
      />
      </View>

  );
}

const styles = StyleSheet.create({
  page: {
    padding: 15,
  }
});
