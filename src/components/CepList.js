import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../assets/js/constants";
import { normalize } from "../assets/js/functions";
import { useAppContext } from "../hooks/appHooks";
import { searchCep, testList } from "../services/viaCep";

const CepList = () => {
    const {resultList} = useAppContext();
    const upperCaseKeys = ["cep", "uf", "ibge", "gia", "ddd", "siafi"];

    const firstCase = (values) => {
        return values.charAt(0).toUpperCase() + values.slice(1);
    }

    const RenderItem = ({item}) => {
        const element = (key, value) => {
            return (
                <View key={key} style={styles.textContainer}>
                        <Text style={styles.textTitle}>{
                        upperCaseKeys.includes(key) ? 
                        key.toUpperCase() : 
                        firstCase(key)
                        }:
                        </Text>
                        <Text style={styles.textContent}>{value}</Text>
                </View>
            );
        };
        return (
            <View style={styles.itemContainer}>
                 {[...Object.keys(item)].map((key) => element(key, item[key]))}    
            </View>
        );
    };

    return (
        <View style={styles.listContainer}>
            {testList.length ?
            <FlatList
            data={testList}
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
        padding: 5,
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