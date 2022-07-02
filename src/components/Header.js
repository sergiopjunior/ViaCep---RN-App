import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "../assets/js/constants";
import { getHeight, getWidth, normalize } from "../assets/js/functions";

const logoUrl = "../assets/img/logo.png";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require(logoUrl)}></Image>
            <Text style={styles.title}>Consulte CEPs de todo o Brasil</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 70,
        paddingHorizontal: 12,
        justifyContent: "center",
        marginBottom: 15,
        backgroundColor: "green",
    },
    logo: {
        height: 36,
        width: 144,
    },
    title: {
        color: Colors.title,
        fontSize: 16,
    }
});