import { IsNotEmpty, IsString, IsDateString, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsDateString()
  published: Date;
}
export class BookDto extends CreateBookDto {
  @IsUUID()
  id: string;
}
