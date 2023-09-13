import { useState } from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {AntDesign} from "@expo/vector-icons";


const BasketItem = ({basketItem}) => {
    return (
        <View style={styles.row}>
            <View style={styles.amountContainer}>
                <Text>1</Text>
            </View>
            <Text style={styles.itemName}>{basketItem.name}</Text>
            <Text style={styles.totalPrice}>£{basketItem.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        marginHorizontal: 20,
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 5,
        paddingTop: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginVertical: 15,
    },
    amountContainer: {
        backgroundColor: "lightgrey",
        paddingHorizontal: 5,
        marginRight: 10,
        borderRadius: 2,
    },
    itemName: {
        fontWeight: "500",
        letterSpacing: 0.5,
    },
    totalPrice: {
        marginLeft: "auto",
        marginRight: 20,
        fontWeight: "500",
        color: "gray"
    },
});

export default BasketItem;