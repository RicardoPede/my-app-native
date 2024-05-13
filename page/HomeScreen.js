import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./DetailsScreen";
import CheckApp from "./MyCheckBox";
import MyApp from "./Main";
import MostrarApi from "./MostrarApi";

const Stack = createNativeStackNavigator();

const HomeView = ({ navigation }) => (
    <View style={styles.container}>
    <ImageBackground style={styles.image}>
        <Text style={styles.text}>Elements</Text>
        <Text style={styles.text}>in Front Of</Text>
        <Text style={styles.text}>Background</Text>
    </ImageBackground>

    <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailsScreen')}>
            <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CheckApp')}>
            <Text style={styles.buttonText}>My CheckBox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyApp')}>
            <Text style={styles.buttonText}>My App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MostrarApi')}>
            <Text style={styles.buttonText}>Mostrar API</Text>
        </TouchableOpacity>
    </View>
</View>
);

const HomeScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="CheckApp" component={CheckApp} />
        <Stack.Screen name="MyApp" component={MyApp} />
        <Stack.Screen name="MostrarApi" component={MostrarApi} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: "#000000a0",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",
    },
    buttonsContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000a0",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#007BFF",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: "50%",
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
});

export default HomeScreen;