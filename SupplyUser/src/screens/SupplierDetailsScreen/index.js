import { View, Text, Image, FlatList, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import StockListItem from "../../components/StockListItem";
import Suppliers from "../../../assets/data/Suppliers.json"
import  Header from "./Header";
import styles from "./styles";

const supplier = Suppliers[0];


const SupplierDetailsPage = () => {
    return (
        <View styles={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header supplier={supplier}/>}
                data={supplier.stock}
                renderItem={({ item }) => <StockListItem stock={item} />}
            />
            <Ionicons 
                name="arrow-back-circle" 
                size={45} color="white" 
                style={styles.iconContainer}
            />
        </View>

    );
};


export default SupplierDetailsPage;