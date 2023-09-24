import { ISaveTicket } from './create-ticket/create-ticket.interface';
import { Ticket } from './ticket';

export class InMemoryTicketsRepository implements ISaveTicket {
  private readonly _tickets: Array<Ticket> = [];

  public async save(ticket: Ticket): Promise<string> {
    this._tickets.push(ticket);
    return ticket.id;
  }
}
