import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

const images = {
  qrcode:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXB6tvgHUw7BV-VIRDiLRjQDhFepQsGNxWA&s",
  profile:
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          height: 600,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
        }}
      >
        <LinearGradient
          colors={["#ffad54", "#62255a"]}
          start={[0, 0]}
          end={[1, 0]}
          style={{
            height: 100,
            width: "100%",
            position: "relative",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Image
            source={{
              uri: images.profile,
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "white",
              position: "absolute",
              top: 50,
              left: "50%",
              marginLeft: -50,
            }}
          />
        </LinearGradient>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 60,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              João da Silva
            </Text>

            <Image
              source={{
                uri: images.qrcode,
              }}
              style={{
                width: 200,
                height: 200,
              }}
            />

            <Text>Festa do Rock</Text>
            <Text>Pista (inteira)</Text>
          </View>

          <View
            style={{
              gap: 10,
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text>22 setembro 2024 - 19:00 22:00</Text>
            <Text>
              <Icon name="map-pin" /> Allianz Parque
            </Text>
          </View>
        </View>
      </View>
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
