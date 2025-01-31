import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { IUser } from "./users.types";
import { UsersService } from "./users.service";

const usersService = new UsersService();

@Controller("users")
export class UsersController {
	@Get()
	getUsers(@Query() query: { [K: string]: string }): IUser[] {
		if (query.gender) {
			return usersService
				.getAllUsers()
				.filter((user) => user.gender === query.gender);
		}
		return usersService.getAllUsers();
	}

	@Get(":id")
	getUserById(@Param("id") id: string): IUser | undefined {
		return usersService.getUserById(+id);
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
