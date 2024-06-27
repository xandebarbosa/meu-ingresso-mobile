interface Ticket {
  countAvailable: number;
  types: {
    name: string;
    price: number;
  }[];
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  ticket: Ticket;
}

export interface Slice {
  allId: string[];
  byId: Record<string, Event>;
  loading: boolean;
  status: "idle" | "loading" | "success" | "error" | "";
}
