import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './page/HomeScreen';
import MyApp from "./page/Main";
import CheckApp from "./page/MyCheckBox";
import MostrarApi from "./page/MostrarApi";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreen from "./page/DetailsScreen";

const ButtonNav = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <ButtonNav.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'MyApp') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if (route.name === 'CheckApp') {
                        iconName = focused ? 'checkbox' : 'checkbox-outline';
                    } else if (route.name === 'MostrarApi') {
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <ButtonNav.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Welcome',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerBackTitle: 'Back',
                        // headerShown: false,
                        headerRight: () => (
                            <TouchableOpacity onPress={() => alert('This is a button!')} style={styles.infoButton}>
                                <Text style={styles.infoButtonText}>Info</Text>
                            </TouchableOpacity>
                        )
                    }}
                    initialParams={{ userId: 1 }}
                />
                <ButtonNav.Screen name="MyApp" component={MyApp} />
                <ButtonNav.Screen name="CheckApp" component={CheckApp} />
                <ButtonNav.Screen name="MostrarApi" component={MostrarApi} />
                <ButtonNav.Screen name="Details" component={DetailsScreen} />
            </ButtonNav.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    infoButton: {
        marginRight: 10,
        padding: 10,
        backgroundColor: '#f4511e',
        borderRadius: 5,
    },
    infoButtonText: {
        color: 'white',
        fontSize: 16,
    },
});