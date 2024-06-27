import { Event } from "../events/types";

export interface Cart {
  event: Event;
  ticket: {
    type: string;
    amount: number;
  };
}

export interface Slice {
  items: Cart[];
}
