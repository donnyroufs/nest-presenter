import { Module } from '@nestjs/common';
import { CreateTicketModule } from './create-ticket';

@Module({
  imports: [CreateTicketModule],
})
export class SupportModule {}
