import { Controller, Post, Get, Delete, Put, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')  //http://localhost:3000/books
export class BooksController {
   constructor(private bookService: BooksService)
   {
    
   }
  @Post('/addBook')
  addBook(): string {
   return this.addBook();
  }
  //http://localhost:3000/books/getAllBooks
  @Get('/getAllBooks')
  getBook(): string {
    return this.getBook();
  }
  //http://localhost:3000/books/deleteBook/:id
  @Delete('/deleteBook/:id')
  deleteBook(@Param() params): string {
    return this.deleteBook(params.id);
  }
  //http://localhost:3000/books/updateBook/:id
  @Put('/updateBook/:id')
  updateBook(@Param() params): string {
    return this.updateBook(params.id);
  }
}
