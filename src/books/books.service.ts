import { Injectable, NotFoundException } from '@nestjs/common';
import { BookDto, CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { v4 as uuidv4 } from 'uuid'; // Import UUID v4
@Injectable()
export class BooksService {
  private books: BookDto[] = [];
  create(createBookDto: CreateBookDto): string {
    const id = uuidv4(); // Generate UUID
    console.log(id);
    const bookWithId = { id, ...createBookDto };
    this.books.push(bookWithId);
    return 'Book has been successfully created.';
  }

  findAll(): CreateBookDto[] {
    return this.books;
  }

  findOne(id: string): CreateBookDto {
    const book = this.books.find(book => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found.`);
    }
    return book;
  }

  update(id: string, updateBookDto: UpdateBookDto): string {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) {
      throw new NotFoundException(`Book with id ${id} not found.`);
    }
    this.books[index] = { ...this.books[index], ...updateBookDto };
    return `Book with id ${id} has been successfully updated.`;
  }

  remove(id: string): string {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) {
      throw new NotFoundException(`Book with id ${id} not found.`);
    }
    this.books.splice(index, 1);
    return `Book with id ${id} has been successfully removed.`;
  }
}
