import { Ticket } from '../ticket';

export interface ISaveTicket {
  save(ticket: Ticket): Promise<string | null>;
}

export const ISaveTicketToken = Symbol('ISaveTicket');
