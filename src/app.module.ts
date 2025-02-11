import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './core/services/app.service';
import { ConfigModule } from '@nestjs/config';
import { EnsService } from './external/ethers/ens.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, EnsService],
})
export class AppModule {}
