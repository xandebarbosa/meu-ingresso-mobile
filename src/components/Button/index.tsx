import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
  variant?: "contained" | "outline";
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  onPress,
  variant = "contained",
  children,
  disabled = false,
  loading = false,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabled ? styles.disabled : styles[variant]]}
      disabled={disabled}
    >
      <Text
        style={{
          fontSize: 16,
          color: disabled ? "#000" : styles[variant].color,
        }}
      >
        {children}
      </Text>
      {loading && <ActivityIndicator />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  contained: {
    backgroundColor: "#484349",
    textAlign: "center",
    color: "white",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#484349",
    color: "#484349",
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: "gray",
  },
});
