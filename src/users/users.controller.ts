import {
	Body,
	Controller,
	DefaultValuePipe,
	Get,
	Param,
	ParseBoolPipe,
	ParseIntPipe,
	Post,
	Query,
	ValidationPipe,
} from "@nestjs/common";
import { IUser } from "./users.types";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";

const usersService = new UsersService();

@Controller("users")
export class UsersController {
	//":isMarried?"
	@Get()
	getUsers(
		@Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
		@Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
		@Param() param: GetUserParamDto,
	): IUser[] {
		console.log("param", param);
		return usersService.getAllUsers();
	}

	@Get(":id")
	getUserById(@Param("id", ParseIntPipe) id: number): IUser | undefined {
		return usersService.getUserById(id);
	}

	@Post()
	createUser(@Body() user: CreateUserDto): string {
		// usersService.createUser(user);
		console.log("user", user);
		return `A new user has been created. ID: ${user.id}`;
	}
}
