import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    addBook(): string
    {
        return `this will add book`;
    }

    getAllBooks(): string{
        return `this will return all book`;
    }

    deleteBook(id: string): string {
        return `this will delete book ${id}`;
    }

    updateBook(id: string): string
    {
        return `this will update book ${id}`;
    }
}
