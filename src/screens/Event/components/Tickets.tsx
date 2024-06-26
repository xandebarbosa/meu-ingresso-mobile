import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  ticket: string;
}

export const Tickets = ({ ticket }: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.info, ticket === "track" && styles.selected]}
      >
        <View style={styles.row}>
          <Text>Pista</Text>
          <Text>R$ 200,00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.info, ticket === "cabin" && styles.selected]}
      >
        <View style={styles.row}>
          <Text>Camarote</Text>
          <Text>R$ 400,00</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  info: {
    marginBottom: 20,
    backgroundColor: "white",
    padding: 10,
  },
  selected: {
    borderWidth: 1,
    borderColor: "#4843494",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
