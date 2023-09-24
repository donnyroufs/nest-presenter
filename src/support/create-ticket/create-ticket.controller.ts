import { Body, Controller, Post } from '@nestjs/common';
import { CreateTicketUseCase } from './create-ticket.usecase';
import { CreateTicketDto } from './create-ticket.dto';

@Controller('/tickets')
export class CreateTicketController {
  public constructor(
    private readonly _createTicketUseCase: CreateTicketUseCase,
  ) {}

  @Post()
  public async handle(@Body() dto: CreateTicketDto) {
    await this._createTicketUseCase.execute(dto.body);
  }
}
