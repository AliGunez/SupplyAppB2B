import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SupplierItem = ({ supplier }) => {
    const navigation = useNavigation();


    const onPress = () => {
        navigation.navigate("Supplier", {id: supplier.id});
    };
    return (
        <Pressable onPress={onPress} style={styles.supplierContainer}>
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

            {/* <View style={styles.rating}>
                <Text>{supplier.rating}</Text>
            </View> */}

            </View>


        </Pressable>
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
      aspectRatio: 7/4,
      marginBottom: 3,
      borderRadius: 10,
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
        backgroundColor: "gray",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    }
  });