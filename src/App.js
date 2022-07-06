import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { getWidth } from "./assets/js/functions";
import { NavigationContainer } from "@react-navigation/native"
import NaviBar from "./components/NaviBar";
import Header from "./components/Header";
import { Colors } from "./assets/js/constants";
import { AppProvider } from "./hooks/appHooks";

const App = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <AppProvider>
                <StatusBar hidden/>
                <Header></Header>
                <NavigationContainer>
                    <NaviBar/>
                </NavigationContainer>
            </AppProvider>      
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});