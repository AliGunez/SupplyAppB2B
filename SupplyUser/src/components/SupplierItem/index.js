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
            <Text style={styles.title}>{supplier.name}</Text>
            <Text style={styles.subtitle}>
                £{supplier.deliveryFee} &#8226; {supplier.minDeliveryTime}-{supplier.maxDeliveryTime} days
            </Text>
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
    },
    title: {
      fontSize: 15,
      fontWeight: "500",
      marginVertical: 2,
    },
    subtitle: {
      color: "grey",
      fontSize: 13,
    },
  });