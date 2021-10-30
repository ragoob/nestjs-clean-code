import { Module } from '@nestjs/common';
import { IocConfigration } from './container/ioc.configuration';
import { ProductController } from './controllers/prouct.controller';
@Module({
  imports: [],
  controllers: [ProductController],
  providers: IocConfigration,
})
export class AppModule {}
