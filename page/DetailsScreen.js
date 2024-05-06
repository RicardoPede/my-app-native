import React from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';

const DetailsScreen = () => (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text>Details Screen</Text>
        </View>
        <View style={styles.row}>
            <Text>Details Screen</Text>
        </View>
        <View style={styles.row}>
            <Text>Details Screen</Text>
        </View>
    </View>
);

export default DetailsScreen;

const styles = ScaledSheet.create({
    container: {
        width: '100@s', // = scale(100)
        height: '200@vs', // = verticalScale(200)
        padding: '2@msr', // = Math.round(moderateScale(2))
        margin: 5
    },
    row: {
        padding: '10@ms0.3', // = moderateScale(10, 0.3)
        width: '50@ms', // = moderateScale(50)
        height: '30@mvs0.3' // = moderateVerticalScale(30, 0.3)
    }
});
