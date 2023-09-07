import { View, Text, Image,} from "react-native";
import styles from "./styles";


const SupplierHeader = ({supplier}) => {
    return (
        <View styles={styles.page}>
            <Image source={{uri: supplier.image}} style={styles.image} resizeMode="cover" />

            <View style={styles.container}>
                <Text style={styles.title}>{supplier.name}</Text>
                <Text style={styles.subtitle}>
                     If Delivery Is Required: £{supplier.deliveryFee} &#8226;
                     {supplier.minDeliveryTime}-{supplier.maxDeliveryTime} days
                </Text>
            </View>
            <View><Text style={styles.items}>Items </Text></View>
        </View>

    );
};


export default SupplierHeader;