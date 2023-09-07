import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 6/3,
    },
    title: {
        marginHorizontal: 20,
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 5,
    },
    subtitle: {
        marginHorizontal: 20,
        fontSize: 15,
        color: "grey",
        fontWeight: "600",
        marginBottom: 5,
    },
    items: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 12,
        fontWeight: 500,
        fontSize: 18,
        color: "grey"
    },
    container: {
        paddingBottom: 10,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
    }
});