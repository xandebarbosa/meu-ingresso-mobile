import { ScrollView, StyleSheet, Text, View } from "react-native";
import { EventCard } from "./components/EventCard";
import { Avatar } from "../../components/Avatar";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eventText}> Eventos</Text>
        <Avatar />
      </View>

      <ScrollView>
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  eventText: {
    fontSize: 20,
  },
  scroll: {
    gap: 20,
  },
});
