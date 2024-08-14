import { createSlice } from "@reduxjs/toolkit";
import { Slice } from "./types";

const initialState: Slice = {
    allId: ["1", "2"],
    byId: {
        '1': {
            id: '1',
            name: 'Bebidas Alcoólicas',
            items: [
                {
                    id: '1',
                    name: 'Chopp 500 ml',
                    price: 17,
                    image: 'https://brindeshop.com.br/10548-large_default/caneca-de-chopp-500ml-personalizada.jpg'
                }
            ]
        },
        '2': {
            id: '2',
            name: 'Bebidas não Alcoólicas',
            items: [
                {
                    id: '2',
                    name: 'Coca-cola 350ml',
                    price: 7,
                    image: 'https://hiperideal.vtexassets.com/arquivos/ids/197362-800-auto?v=637830468563800000&width=800&height=auto&aspect=true'
                }
            ]
        }
    },
    loading: false,
    status: "idle"
}

const slice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        list(state, action) {}
    }
 }) 

 export const { list } = slice.actions;
 export default slice.reducer;