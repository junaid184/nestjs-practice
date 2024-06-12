import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateBookDto } from './dto/create-book.dto';
import { validate } from 'class-validator';

@Injectable()
export class BooksPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (value.published && value.title) {
      const bookClass = plainToInstance(CreateBookDto, value);
      const errors = await validate(bookClass);
      if (errors.length > 0) {
        throw new BadRequestException(
          `validation error: ${JSON.stringify(errors)}`,
        );
      }
    } else {
      throw new BadRequestException(`all params are required`);
    }
  }
}
