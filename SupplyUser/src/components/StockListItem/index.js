import { View, Text, StyleSheet, Image } from "react-native";

const StockListItem = ({ stock }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.name}>{stock.name} </Text>
                <Text style={styles.description} numberOfLines={2}>{stock.description} </Text>
                <Text style={styles.price}>£{stock.price}</Text>
                <Text style={styles.quantity}>{stock.quantity} In Stock </Text>
            </View>
            {stock.image && (
            <Image source={{uri: stock.image}} style={styles.image} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    name: {
        fontWeight: "600",
        fontSize: 17,
        letterSpacing: 0.5,
    },
    description: {
        color: "grey",
        fontSize: 14,
        marginVertical: 2,
        fontWeight: "450"
    },
    price: {
        fontSize: 15,
        fontWeight: "600"
    },
    image: {
        height: 100,
        aspectRatio: 1,
    },
    quantity: {
        fontSize: 14,
        marginVertical: 2,
        color: "red",
        fontWeight: "450"

    }
});

export default StockListItem