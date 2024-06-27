import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
  label?: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  middle?: boolean;
  onChangeText?: (text: string) => void;
}

export const Input = ({
  label,
  placeholder,
  keyboardType = "default",
  middle = false,
  onChangeText,
}: Props) => {
  return (
    <View
      style={[styles.container, middle && { flex: 1, marginHorizontal: 5 }]}
    >
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#484349",
  },
  label: {},
});
