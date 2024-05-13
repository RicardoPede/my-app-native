import React, { useEffect, useState } from "react";
import { Button, View } from 'react-native';
import { Text, FlatList } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';

export default function MostrarApi() {

    const [lista, setLista] = useState([])

    const appi = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
        const json = await response.json();
        console.log(json);
        setLista(json);
    }
    useEffect(() => {
        appi();
    }, []);

    return (
        <FlatList
            data={lista.results}
            keyExtractor={item => item.name}
            ListHeaderComponent={() => <Button title="Mostrar Pokemon" onPress={appi} />}
            renderItem={({ item, index }) => (
                <View style={styles.listItem}>
                    <Text style={styles.text}>{index + 1}: {item.name}</Text>
                </View>
            )}
        />
    );
}

const styles = ScaledSheet.create({
    listItem: {
        padding: 10,
        marginTop: 5,
        backgroundColor: '#f9c2ff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,

    },
    text: {
        fontSize: 18,
        padding: '10@ms0.3', 
        width: '50@ms', 
        height: '30@mvs0.3', 
        width: '300@s', 
        height: '30@vs', 
        padding: '2@msr',
        margin: 5,
        backgroundColor: 'red',
    },
});
