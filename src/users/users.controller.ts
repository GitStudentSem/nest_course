import { Controller, Get, Post } from "@nestjs/common";
import { IUser } from "./users.types";
import { UsersService } from "./users.service";

const usersService = new UsersService();

@Controller("users")
export class UsersController {
	@Get()
	getUsers(): IUser[] {
		return usersService.getAllUsers();
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
