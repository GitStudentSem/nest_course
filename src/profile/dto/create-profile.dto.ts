import {
	IsDate,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";

export class CreateProfileDto {
	@IsString({ message: "'name' should be a string value." })
	@IsOptional()
	@MinLength(2, { message: "'name' should have a minimum of 2 characters." })
	@MaxLength(100)
	firstName?: string;

	@IsString({ message: "'lastname' should be a string value." })
	@IsOptional()
	@MinLength(2, {
		message: "'lastname' should have a minimum of 2 characters.",
	})
	@MaxLength(100)
	lastName?: string;

	@IsString({ message: "'gender' should be a string value." })
	@IsOptional()
	@MaxLength(10)
	gender?: string;

	@IsDate()
	@IsOptional()
	dateOfBirth?: Date;

	@IsString()
	@IsOptional()
	bio?: string;

	@IsString()
	@IsOptional()
	profileImage?: string;
}
