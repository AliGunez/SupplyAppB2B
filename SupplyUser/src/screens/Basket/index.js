import { useState } from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import BasketItem from "../../components/BasketItem";

import Suppliers from "../../../assets/data/Suppliers.json"
const supplier = Suppliers[0];


const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{supplier.name}</Text>
            <Text style={styles.description}>{supplier.address}</Text>

            <Text style={styles.subTitle}>Your Items</Text>

            <FlatList data={supplier.stock} renderItem={({item}) => <BasketItem basketItem={item}/>}/>

            <View style={styles.separator}></View>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Order</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    name: {
        marginHorizontal: 20,
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 5,
        paddingTop: 20,
    },
    description: {
        marginHorizontal: 20,
        fontSize: 15,
        color: "grey",
        fontWeight: "600",
        marginBottom: 5,
        paddingBottom: 10,
    },
    subTitle: {
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 5,
        paddingBottom: 10,
    },
    separator: {
        height: 1,
        backgroundColor: "grey",
        marginVertical: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginVertical: 15,
    },
    amount: {
        fontSize: 25,
        marginHorizontal: 20,
        fontWeight: "450",
    },
    quantity: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        fontWeight: "450",
        color: "red",
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        margin: 20,
        padding: 20,
        marginBottom: 100,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    totalPrice: {
        marginLeft: "auto",
        marginRight: 20,
        fontWeight: "500",
        color: "gray"
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
    }
});

export default Basket;