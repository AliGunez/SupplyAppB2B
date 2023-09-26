import { View, FlatList} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import StockListItem from "../../components/StockListItem";
import Suppliers from "../../../assets/data/Suppliers.json"
import  Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/core";

const supplier = Suppliers[0];


const SupplierDetailsPage = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;

    return (
        <View styles={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header supplier={supplier}/>}
                data={supplier.stock}
                renderItem={({ item }) => <StockListItem stock={item} />}
                keyExtractor={(item) => item.name}
            />
            <Ionicons onPress={() => navigation.goBack()}
                name="arrow-back-circle" 
                size={45} color="lightgrey" 
                style={styles.iconContainer}
            />
        </View>

    );
};


export default SupplierDetailsPage;