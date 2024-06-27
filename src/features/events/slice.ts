import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, Slice } from "./types";

const initialState: Slice = {
  allId: ["1", "2"],
  byId: {
    "1": {
      id: "1",
      name: "Rock in Sampa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, excepturi dicta. Voluptate maxime ut labore voluptates doloribus, accusantium quod similique culpa excepturi? Possimus, architecto dolores. Nulla magnam sint fugit praesentium? \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, excepturi dicta. Voluptate maxime ut labore voluptates doloribus, accusantium quod similique culpa excepturi? Possimus, architecto dolores. Nulla magnam sint fugit praesentium?",
      date: "14 de setembro",
      time: "15:00 - 22:00",
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Allianz Parque",
      ticket: {
        countAvailable: 100,
        types: [
          {
            name: "Pista",
            price: 100,
          },
          {
            name: "Camarote",
            price: 200,
          },
        ],
      },
    },
    "2": {
      id: "2",
      name: "São Paulo Fashion Week",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, excepturi dicta. Voluptate maxime ut labore voluptates doloribus, accusantium quod similique culpa excepturi? Possimus, architecto dolores. Nulla magnam sint fugit praesentium? \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, excepturi dicta. Voluptate maxime ut labore voluptates doloribus, accusantium quod similique culpa excepturi? Possimus, architecto dolores. Nulla magnam sint fugit praesentium?",
      date: "20 de setembro",
      time: "10:00 - 20:00",
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Parque Ibirapuera",
      ticket: {
        countAvailable: 50,
        types: [
          {
            name: "Pista",
            price: 100,
          },
          {
            name: "Camarote",
            price: 200,
          },
        ],
      },
    },
  },
  loading: false,
  status: "idle",
};

const slice = createSlice({
  name: "events",
  initialState,
  reducers: {
    list(state, action: PayloadAction<Event[]>) {
      state.byId = action.payload.reduce<Slice["byId"]>((acc, event) => {
        acc[event.id] = event;
        return acc;
      }, {});
      state.allId = Object.keys(state.byId);
    },
  },
});

export const { list } = slice.actions;
export default slice.reducer;
