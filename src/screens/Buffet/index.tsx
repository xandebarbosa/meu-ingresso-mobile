import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native"
import { useAppSelector } from "../../features/hooks";
import { useNavigation } from "@react-navigation/native";
import { Item } from "../../features/categories/types";

export const BuffetScreen = ({ route }: any ) => {
    const navigation = useNavigation();
    const { categoryId } = route.params;

    const items = useAppSelector(state => state.categories.byId[categoryId].items);
  
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {items.map((item) => (
                <TouchableOpacity 
                    key={item.id} 
                    onPress={() => navigation.navigate("ItemBuffet", {
                        buffetId: item.id,
                        itemName: item.name,
                        itemImage: item.image,
                        itemPrice: item.price 
                    })} 
                    style={styles.card}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.row}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <Text style={styles.itemPrice}>{`R$ ${item.price.toFixed(2)}`}</Text>
                    </View>
                </TouchableOpacity>
                
            ))}
        </ScrollView>
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
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
      itemName: {
          fontSize: 18,
          marginBottom: 8,
      },
      itemImage: {
          width: 60,
          height: 60,
      },
      itemPrice: {
          fontWeight: "bold",
          fontSize: 18,
      },
})