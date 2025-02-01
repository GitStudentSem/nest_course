import {
	Body,
	Controller,
	DefaultValuePipe,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller("users")
export class UsersController {
	constructor(private usersService: UsersService) {}

	// Вместо этого
	// @Get(":isMarried?")
	//? вероятно это не правильно, нужно разбираться
	@Get("{:isMarried}")
	getUsers(
		@Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
		@Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
		@Param() param: GetUserParamDto,
	): CreateUserDto[] {
		console.log("param", param);
		return this.usersService.getAllUsers();
	}

	@Get(":id")
	getUserById(@Param("id", ParseIntPipe) id: number): CreateUserDto | undefined {
		return this.usersService.getUserById(id);
	}

	@Post()
	createUser(@Body() user: CreateUserDto): string {
		// this.usersService.createUser(user);
		console.log("user", user);
		return `A new user has been created. ID: ${user.id}`;
	}

	@Patch()
	updateUser(@Body() user: UpdateUserDto): string {
		console.log("user", user);
		return "User updated successfully";
	}
}
