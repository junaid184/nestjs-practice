import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';




@Module({
  imports: [],
  controllers: [BooksController],
  providers: [ BooksService],
  exports:[]
})
export class RootModule {
  constructor()
  {
    console.log('Root Module')
  }
}
