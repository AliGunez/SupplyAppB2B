import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const SupplierItem = ({ supplier }) => {
    return (
        <View style={styles.supplierContainer}>
            <Image
                source={{
                    uri: supplier.image,
                }}
                style={styles.image} 
            />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{supplier.name}</Text>
                    <Text style={styles.subtitle}>
                        If Delivery Is Required: £{supplier.deliveryFee} &#8226; {supplier.minDeliveryTime}-{supplier.maxDeliveryTime} days
                    </Text>
                </View>
            </View>

            {/* <View style={styles.rating}>
                <Text>{supplier.rating}</Text>
            </View> */}


        </View>
    );
};

export default SupplierItem;

const styles = StyleSheet.create({
    supplierContainer: {
      width: "100%",
      marginVertical: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 6/3,
      marginBottom: 3,
      borderRadius: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      marginVertical: 2,
    },
    subtitle: {
      color: "grey",
      fontSize: 12,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    }
  });