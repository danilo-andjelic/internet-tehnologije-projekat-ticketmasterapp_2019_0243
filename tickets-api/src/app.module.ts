import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfigFactory } from "typeorm.config";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfigFactory,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
