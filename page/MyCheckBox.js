import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyCheckBox({
  onChange,
  checked,
  buttonSyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) {
  const iconProps = checked ? activeIconProps : inactiveIconProps;

  return (
    <Pressable
      style={[
        buttonSyle,
        checked ? activeButtonStyle : inactiveButtonStyle,
      ]}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <Ionicons
          name="checkmark"
          size={24}
          color="white"
          {...iconProps}
        />
      )}
    </Pressable>
  );
}

const CheckApp = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Checkbox Example</Text>
      <View style={styles.checkboxContainer}>
        <MyCheckBox 
          checked={checked}
          onChange={setChecked}
          buttonSyle={styles.checkboxBase}
          activeButtonStyle={styles.checkboxChecked}
          />
        <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
      </View>
    </View>
  );
}

export default CheckApp;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
    color: 'coral',
  },
});