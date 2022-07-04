import React from "react";
import { StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "../assets/js/constants";
import { getHeight, getWidth, normalize } from "../assets/js/functions";
import Icon from 'react-native-vector-icons/FontAwesome';

const ConsultarCep = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{flex: 1, marginHorizontal: 5}}>
                <Text style={styles.searchBarTitle}>CEP</Text>
                <View style={styles.serachBarContainer}>           
                    <TextInput numberOfLines={1} style={[styles.input, styles.CEP]}/>
                    <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonItem}>Buscar</Text>
                            <Icon style={styles.buttonItem} name="search" size={normalize(24)} color={"black"} />
                    </TouchableOpacity>
                </View>
            </View>    
            <View style={styles.inlineContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>UF</Text>
                    <TextInput numberOfLines={1} style={[styles.input, styles.UF]}/>              
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>DDD</Text>
                    <TextInput numberOfLines={1} style={[styles.input, styles.DDD]}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>SIAFI</Text>
                    <TextInput numberOfLines={1} style={[styles.input, styles.SIAFI]}/>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Logradouro</Text>
                <TextInput numberOfLines={1} style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Complemento</Text>
                <TextInput numberOfLines={1} style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Bairro</Text>
                <TextInput numberOfLines={1} style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Localidade</Text>
                <TextInput numberOfLines={1} style={styles.input}/>
            </View>
            <View style={styles.inlineContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>IBGE</Text>
                    <TextInput numberOfLines={1} style={[styles.input, styles.IBGE]}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>GIA</Text>
                    <TextInput numberOfLines={1} style={[styles.input, styles.GIA]}/>
                </View>
            </View>       
        </ScrollView>
    );
};

export default ConsultarCep;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.inputBackground,
    },
    serachBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    searchBarTitle: {
        fontSize: normalize(18),
        color: Colors.inputTitle,
    },
    inlineContainer: {
        flexDirection: "row",
    },
    inputContainer: {
        marginBottom: 10,
        marginHorizontal: 5,
    },
    inputTitle: {
        fontSize: normalize(18),
        color: Colors.inputTitle,
    },
    input: {
        padding: 0,
        textAlign: "center",
        height: normalize(30),
        borderColor: Colors.inputBorder,
        borderWidth: 1,
        fontSize: normalize(17),
        color: Colors.inputContent,
        backgroundColor: Colors.inputBackground,
    },
    CEP: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    UF: {
        width: 35,
    },
    IBGE: {
        width: 150,
    },
    GIA: {
        width: 150,
    },
    DDD: {
        width: 40,
    },
    SIAFI: {
        width: 120,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: normalize(100),
        height: normalize(30),
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        borderLeftWidth: 0,
    },
    buttonItem: {
        marginHorizontal: 5,
        fontSize: normalize(20),
    },
});