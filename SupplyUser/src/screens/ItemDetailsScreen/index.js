import { useState } from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import Suppliers from "../../../assets/data/Suppliers.json"
const item = Suppliers[0].stock[0];


const ItemDetailsScreen = () => {
    const [amount, setAmount] = useState(1);

    const onMinus = () => {
        if (amount > 1) {
        setAmount(amount - 1)
        }
    };

    const onPlus = () => {
        if (amount < Suppliers[0].stock[0].quantity) {
        setAmount(amount + 1)
        }
    };

    const getTotal = () => {
        return (item.price * amount).toFixed(2);
    };

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.separator}></View>
            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus} />
                <Text style={styles.amount}>{amount}</Text>
                <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus} />
            </View>
            <View style={styles.quantity}><Text style={styles.quantity}>{item.quantity} In Stock</Text></View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Add {amount} to basket &#8226; £{getTotal()}</Text>
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
    separator: {
        height: 1,
        backgroundColor: "grey",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        marginTop: "auto",
        alignItems: "center",
        justifyContent: "center",
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
    }
});

export default ItemDetailsScreen;