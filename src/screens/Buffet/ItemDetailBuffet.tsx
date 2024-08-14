import { FontAwesome } from "@expo/vector-icons"
import { useState } from "react"
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export const ItemDetailBuffetScreen = ({ route }) => {

    const { buffetId, itemName, itemImage, itemPrice } = route.params;
    const [quantityItems, setQuantityItems] = useState({ quantityOfItems: 0});

    const handleAddItems = () => {
        setQuantityItems({
            ...quantityItems,
            quantityOfItems: quantityItems.quantityOfItems + 1
        })
    }

    const handleRemoveItems = () => {
        setQuantityItems({
            ...quantityItems,
            quantityOfItems: quantityItems.quantityOfItems - 1
        })
    }

    const handleAddToCart = () => {
        console.log('Item adicionado ao carrinho:', { itemName, quantityItems });
    };

    const formattedPrice = `R$ ${itemPrice.toFixed(2)}`;
    const totalPrice = `R$ ${(itemPrice * quantityItems.quantityOfItems).toFixed(2)}`;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Detalhes do pedido</Text>
                <Text>{itemName}</Text>
                <View style={styles.row}>
                <Image source={{ uri: itemImage }} style={styles.itemImage} />
                <Text style={styles.itemPrice} >{formattedPrice}</Text>
                </View>
                <Text style={{textAlign: 'center'}}>Quantidade</Text>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome.Button name="plus" size={14} onPress={handleAddItems} style={styles.iconButton} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={String(quantityItems.quantityOfItems)}
                            onChangeText={(text) => setQuantityItems({ quantityOfItems: parseInt(text) })}
                            textAlign="center"
                        />
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome.Button name="minus" size={14} onPress={handleRemoveItems} style={styles.iconButton}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                        <Text style={styles.addToCartButtonText}>Adicionar no carrinho  -  {totalPrice}</Text>
                    </TouchableOpacity>
            </View>
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
      row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10
      },
      button: {
        paddingHorizontal: 35,
        borderRadius: 5,
        backgroundColor: "transparent",
         
              
      },
      iconButton: {
        marginLeft: 2, 
        marginRight: -5
      },
      input: {
        height: 30,
        width: 80,
        marginEnd: -30,
        marginStart: -30,
        borderWidth: 1,
        borderRadius: 3,        
        textAlign: 'center',
      },
      itemImage: {
        width: 60,
        height: 60,
    },
    itemPrice: {
        fontWeight: "bold",
        fontSize: 18,
    },
    addToCartButton: {
        marginTop: 20,
        backgroundColor: '#e01313',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})