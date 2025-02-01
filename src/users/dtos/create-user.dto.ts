import {
	IsBoolean,
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	MinLength,
} from "class-validator";

export class CreateUserDto {
	@IsNumber()
	id: number;

	@IsString({ message: "'name' should be a string value." })
	@IsNotEmpty({ message: "'name' shouldn`t be an empty value." })
	@MinLength(2, { message: "'name' should have a minimum of 2 characters." })
	name: string;

	@IsString({ message: "'gender' should be a string value." })
	@IsOptional()
	gender?: string;

	@IsEmail()
	email: string;

	password: string;

	@IsBoolean()
	isMarried: boolean;
}
