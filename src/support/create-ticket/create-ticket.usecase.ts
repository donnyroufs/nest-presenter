import { Inject, Injectable } from '@nestjs/common';
import {
  ICreateTicketUseCasePresenter,
  ICreateTicketUseCasePresenterToken,
} from './create-ticket-usecase-presenter.interface';
import { Ticket } from '../ticket';
import { randomUUID } from 'crypto';
import { ISaveTicket, ISaveTicketToken } from './create-ticket.interface';

@Injectable()
export class CreateTicketUseCase {
  public constructor(
    @Inject(ICreateTicketUseCasePresenterToken)
    private readonly _presenter: ICreateTicketUseCasePresenter,
    @Inject(ISaveTicketToken)
    private readonly _createTicket: ISaveTicket,
  ) {}

  public async execute(body: string): Promise<void> {
    const ticket = new Ticket(randomUUID(), body);
    const res = await this._createTicket.save(ticket);

    if (res === null) {
      this._presenter.failed('dont know');
      return;
    }

    this._presenter.succeeded(ticket.id);
  }
}
