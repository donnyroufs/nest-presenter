import { Module } from '@nestjs/common';

import { CreateTicketUseCase } from './create-ticket.usecase';
import { ISaveTicketToken } from './create-ticket.interface';
import { InMemoryTicketsRepository } from '../in-memory-tickets.repository';
import { ICreateTicketUseCasePresenterToken } from './create-ticket-usecase-presenter.interface';
import { CreateTicketUseCasePresenter } from './create-ticket-usecase.presenter';
import { CreateTicketController } from './create-ticket.controller';

@Module({
  controllers: [CreateTicketController],
  providers: [
    CreateTicketUseCase,
    {
      provide: ISaveTicketToken,
      useClass: InMemoryTicketsRepository,
    },
    {
      provide: ICreateTicketUseCasePresenterToken,
      useClass: CreateTicketUseCasePresenter,
    },
  ],
})
export class CreateTicketModule {}
