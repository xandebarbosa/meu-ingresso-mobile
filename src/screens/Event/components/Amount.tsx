import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  amount: number;
  handleAddAmount: () => void;
  handleRemoveAmount: () => void;
}

export const Amount = ({
  amount,
  handleAddAmount,
  handleRemoveAmount,
}: Props) => {
  return (
    <View style={styles.info}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={handleRemoveAmount}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "gray",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              lineHeight: 30,
              color: "white",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text>{amount}</Text>
        <TouchableOpacity
          onPress={handleAddAmount}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "gray",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              lineHeight: 30,
              color: "white",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    marginBottom: 20,
    backgroundColor: "white",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
