import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";

export class CreateUserDto {
	@IsEmail()
	@IsNotEmpty({ message: "'email' shouldn`t be an empty value." })
	@MaxLength(100)
	email: string;

	@IsNotEmpty({ message: "'email' shouldn`t be an empty value." })
	@MaxLength(24)
	username: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	@MaxLength(100)
	password: string;

	@IsOptional()
	profile: CreateProfileDto | null;
}
