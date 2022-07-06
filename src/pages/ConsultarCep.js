import React from "react";
import { StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "../assets/js/constants";
import { getHeight, getWidth, normalize } from "../assets/js/functions";
import Icon from 'react-native-vector-icons/FontAwesome';
import CepList from "../components/CepList";
import { searchCep } from "../services/viaCep";
import { useState, useCallback } from "react";
import { useAppContext } from "../hooks/appHooks";

const ConsultarCep = () => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [cepToSearch, setCepToSearch] = useState("");
    const [showResults, setShowResults] = useState(false);
    const {getCep} = useAppContext();
    
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: 5}}>
                <Text id style={styles.searchBarTitle}>CEP</Text>
                <View style={styles.serachBarContainer}>           
                    <TextInput onChangeText={(value) => {setCepToSearch(value); console.log(value);}} numberOfLines={1} style={[styles.input, styles.CEP]}/>
                    <TouchableOpacity onPress={
                        () => {
                            if (cepToSearch != "")
                            {   
                                getCep(cepToSearch);
                                setShowResults(true);
                                //forceUpdate();
                            }
                        }
                    } style={styles.buttonContainer}>
                            <Text style={styles.buttonItem}>Buscar</Text>
                            <Icon style={styles.buttonItem} name="search" size={normalize(24)} color={"black"} />
                    </TouchableOpacity>
                </View>
            </View>    
            {
                showResults ?
                <CepList cep={cepToSearch}/> : 
                <Text></Text>
            }
        </View>
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