import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Event } from "../../../features/events/types";

interface Props {
  ticketSelected: string;
  tickets: Event["ticket"]["types"];
  handleTicketSelected: (ticket: string) => void;
}

export const Tickets = ({
  ticketSelected,
  tickets,
  handleTicketSelected,
}: Props) => {
  return (
    <View>
      {tickets.map((ticket) => (
        <TouchableOpacity
          key={ticket.name}
          onPress={() => handleTicketSelected(ticket.name)}
          style={[
            styles.info,
            ticketSelected === ticket.name && styles.selected,
          ]}
        >
          <View style={styles.row}>
            <Text>{ticket.name}</Text>
            <Text>
              {ticket.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
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
