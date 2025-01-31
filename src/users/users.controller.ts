import {
	Controller,
	DefaultValuePipe,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Query,
} from "@nestjs/common";
import { IUser } from "./users.types";
import { UsersService } from "./users.service";

const usersService = new UsersService();

@Controller("users")
export class UsersController {
	@Get()
	getUsers(
		@Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
		@Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
	): IUser[] {
		return usersService.getAllUsers();
	}

	@Get(":id")
	getUserById(@Param("id", ParseIntPipe) id: number): IUser | undefined {
		return usersService.getUserById(id);
	}

	@Post()
	createUser(): string {
		const user: IUser = {
			id: 3,
			name: "Alex",
			age: 33,
			gender: "male",
			isMarried: false,
		};

		usersService.createUser(user);
		return "A new user has been created";
	}
}
