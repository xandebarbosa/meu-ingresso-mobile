export interface Ticket {
  id: string;
  eventId: string;
  type: string;
  name: string;
  document: string;
  birthDate: string;
}

export interface Slice {
  allId: string[];
  byId: Record<string, Ticket>;
}
