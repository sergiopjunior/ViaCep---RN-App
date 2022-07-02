import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Colors } from "../assets/js/constants";
import { getHeight, getWidth } from "../assets/js/functions";

const ConsultarCep = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBar}>

            </TextInput>
        </View>
    );
};

export default ConsultarCep;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.background,
    },
    searchBar: {
        borderColor: "black",
        borderWidth: 1,
        //backgroundColor: "green",
    },
});