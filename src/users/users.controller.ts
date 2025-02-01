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

	@Get()
	getUsers() {
		return this.usersService.getAllUsers();
	}

	@Post()
	createUser(@Body() user: CreateUserDto) {
		this.usersService.createUser(user);
	}
}
