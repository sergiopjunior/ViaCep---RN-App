import React from "react";
import { View, StyleSheet } from "react-native";
import { getWidth, normalize } from "../assets/js/functions";
import { Colors } from "../assets/js/constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConsultarCep from "../pages/ConsultarCep";
import ConsultarRua from "../pages/ConsultarRua";
import Historico from "../pages/Historico";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const NaviBar = () => {
    return (
        <Tab.Navigator initialRouteName="Consultar Cep"  screenOptions={({ route }) => ({
            tabBarStyle: styles.tabBar,
            headerShown: false,
            tabBarLabelStyle: {fontSize: normalize(13)},
            tabBarActiveTintColor: Colors.tabBarLabelFocusColor,
            tabBarInactiveTintColor: Colors.tabBarLabelColor, 
            tabBarBadgeStyle: {
                color: Colors.tabBarBadgeTextColor, 
                backgroundColor: Colors.tabBarBadgeColor, 
                fontSize: normalize(15), 
                alignItems: "center", 
                justifyContent: "center" }, 
                tabBarIcon: ({ focused}) => {
                    let iconName;
                    let color = focused ? Colors.tabBarIconFocusColor : Colors.tabBarIconColor
                  
                    if (route.name === "Consultar Cep")
                        iconName = "search";
    
                    if (route.name === 'Consultar Rua')
                        iconName = "street-view";

                    if (route.name == "Histórico")
                        iconName = "history";
 
                    return <Icon name={iconName} size={normalize(24)} color={color} />;
            },
          })}>
            <Tab.Screen name="Consultar Cep" component={ConsultarCep}/>
            <Tab.Screen name="Consultar Rua" component={ConsultarRua}/>
            <Tab.Screen name="Histórico" component={Historico}/>
        </Tab.Navigator>
    );
}

export default NaviBar;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Colors.tabBarColor, 
        height: normalize(45),
    },
})