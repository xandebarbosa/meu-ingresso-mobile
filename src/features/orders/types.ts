export interface Item {
    id: string,
    name: string,
    price: number,
    image: string
}

export interface Order {
    id: string;
    name: string;
    quantity: number;
    totalValue: number;
    date: string;
    time: string;
    Items: Item;
}

export interface Slice {
    allId: string[];
    byId: Record<string, Event>;
    loading: boolean;
    status: "idle" | "loading" | "success" | "error" | "";
  }