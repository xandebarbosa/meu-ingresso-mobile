import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAppSelector } from "../../features/hooks";

export const CategoryBuffetScreen = () => {
    const navigation = useNavigation();
    const categories = useAppSelector(state => state.categories.allId.map(item => state.categories.byId[item]));
    
  return (
    <View style={styles.container}>
        {categories.map(item => 
             <TouchableOpacity 
             key={item.id}
             style={styles.card}
             onPress={() => navigation.navigate("Buffet", {
                categoryId: item.id
             })}
             >
            <View style={styles.card}>
             <Text style={styles.cardText}>{item.name}</Text>
            </View>
         </TouchableOpacity> 
        )}      
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        gap: 10,
      },
      card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 5,
      },
      cardText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    }
})
