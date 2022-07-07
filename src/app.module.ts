import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XlsxModule } from './xlsx/xlsx.module';
import * as XLSX from 'xlsx'

@Module({
  imports: [XlsxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
