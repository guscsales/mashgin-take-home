import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { StaticService } from './services/static.service';
import { StaticController } from './controllers/static.controller';

@Module({
  imports: [SharedModule],
  providers: [StaticService],
  controllers: [StaticController],
})
export class StaticModule {}
