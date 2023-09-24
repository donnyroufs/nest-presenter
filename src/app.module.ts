import { Module } from '@nestjs/common';
import { SupportModule } from './support/support.module';

@Module({
  imports: [SupportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
