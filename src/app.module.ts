import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidController } from './covid/covid.controller';
import {HttpModule} from "@nestjs/axios";
import {CovidService} from "./covid/covid.service";

@Module({
  imports: [HttpModule],
  controllers: [AppController, CovidController],
  providers: [AppService, CovidService],
})
export class AppModule {}
