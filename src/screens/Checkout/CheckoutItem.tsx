import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../components/Input";

interface Props {
  index: number;
  type: string;
  onChange(name: string, value: string): void;
}
export const CheckoutItem = ({ index, type, onChange }: Props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        Ingresso {type} ({index})
      </Text>
      <View style={styles.info}>
        <Input
          label="Nome completo"
          onChangeText={(value) => onChange("name", value)}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Input
            middle
            label="CPF"
            onChangeText={(value) => onChange("document", value)}
          />
          <Input
            middle
            label="Data de nascimento"
            onChangeText={(value) => onChange("birthDate", value)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
  },
});
