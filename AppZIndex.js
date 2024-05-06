import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <View style={styles.root}>
            <View style={[
                styles.container,
                {
                    backgroundColor: '#e1e4e8',
                }
            ]} />
            {/*  zIndex: 0 */}
            <View style={[
                styles.item,
                {
                    backgroundColor: '#6638f0'
                }
            ]} />
            {/*  zIndex: 1 */}
            <View style={[
                styles.item,
                {
                    backgroundColor: '#5cc9f5',
                    marginTop: -16,
                    position: 'absolute',
                    top: 32,
                    left: 32,
                    // zIndex: 1, // esto significa que este elemento se superpone al elemento anterior
                    zIndex: 100
                }
            ]} />
            {/*  zIndex: 2 */}
            <View style={[
                styles.item,
                {
                    backgroundColor: '#4af2a1',
                    marginTop: -188,
                }
            ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        height: 200,
        width: 200,
        borderRadius: 16,
        padding: 16,
        borderWidth: 8,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    item: {
        borderWidth: 4,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 48,
        width: 48,
        borderRadius: 8,
    },
});
