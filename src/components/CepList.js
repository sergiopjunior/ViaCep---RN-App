import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { useState } from "react/cjs/react.development";
import { Colors } from "../assets/js/constants";
import { normalize } from "../assets/js/functions";
import { useAppContext } from "../hooks/appHooks";
import { searchCep, testList } from "../services/viaCep";

const CepList = ({cep}) => {
    const {resultList} = useAppContext();

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>CEP:</Text>
                    <Text style={styles.textContent}>{item.cep}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Logradouro:</Text>
                    <Text style={styles.textContent}>{item.logradouro}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Complemento:</Text>
                    <Text style={styles.textContent}>{item.complemento}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Bairro:</Text>
                    <Text style={styles.textContent}>{item.bairro}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Localidade:</Text>
                    <Text style={styles.textContent}>{item.localidade}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>UF:</Text>
                    <Text style={styles.textContent}>{item.uf}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>IBGE:</Text>
                    <Text style={styles.textContent}>{item.ibge}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>GIA:</Text>
                    <Text style={styles.textContent}>{item.gia}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>DDD:</Text>
                    <Text style={styles.textContent}>{item.ddd}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>SIAFI:</Text>
                    <Text style={styles.textContent}>{item.siafi}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.listContainer}>
            {resultList.length ?
            <FlatList
            data={resultList}
            scrollEnabled={true}
            keyExtractor={item => item.cep}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            renderItem={item => <RenderItem {...item}/>}
            /> :
            <Text>Nenhum cep encontrado</Text>
        }
        </View>  
    );
};

export default CepList;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1, 
        padding: 5,
        //backgroundColor: "red",
    },
    itemContainer: {
        backgroundColor: "rgba(240, 240, 240, 1)",
    },
    separator: {
        // View
        width: "90%",
        height: 1,
        backgroundColor: Colors.list_separator,
        marginTop: 5,
        alignSelf: "center",
    },
    textContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
    },
    textTitle: {
        fontSize: normalize(15),
        color: "black",
        fontWeight: "900",
        marginRight: 5,
    },
    textContent: {
        fontSize: normalize(15),
        color: "black",
    },
});