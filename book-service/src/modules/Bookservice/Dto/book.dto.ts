import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsNotEmpty()
    prices: string;


    @IsNumber()
    @IsNotEmpty()
    authorId: number

}