import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorModule } from './calculator/calculator.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule, CalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
