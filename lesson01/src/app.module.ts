import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ThrottlerModule.forRoot([{ ttl: 60000, limit: 10 }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
