import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app/app.controller';
@Module({
  imports: [BooksModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
