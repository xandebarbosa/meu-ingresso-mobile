export interface Item {
    id: string,
    name: string,
    price: number,
    image: string
}

export interface Category {
    id: string;
    name: string;
    items: Item[]
}

export interface Slice {
    allId: string[];
    byId: Record<string, Category>;
    loading: boolean;
    status: "idle" | "loading" | "success" | "error" | "";
  }
  