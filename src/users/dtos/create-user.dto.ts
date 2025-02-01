import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";

export class CreateUserDto {
	@IsString({ message: "'name' should be a string value." })
	@IsNotEmpty({ message: "'name' shouldn`t be an empty value." })
	@MinLength(2, { message: "'name' should have a minimum of 2 characters." })
	@MaxLength(100)
	firstName: string;

	@IsString({ message: "'lastname' should be a string value." })
	@IsNotEmpty({ message: "'lastname' shouldn`t be an empty value." })
	@MinLength(2, {
		message: "'lastname' should have a minimum of 2 characters.",
	})
	@MaxLength(100)
	lastName: string;

	@IsString({ message: "'gender' should be a string value." })
	@IsOptional()
	@MaxLength(10)
	gender?: string;

	@IsEmail()
	@IsNotEmpty({ message: "'email' shouldn`t be an empty value." })
	@MaxLength(100)
	email: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	@MaxLength(100)
	password: string;
}
