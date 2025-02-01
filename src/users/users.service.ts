import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
	constructor(
		@Inject(forwardRef(() => AuthService))
		private readonly authService: AuthService,
	) {}
	users: CreateUserDto[] = [
		{
			firstName: "Lisa",
			lastName: "Lastnamovich",
			email: "lisa@yandex.ru",
			gender: "female",
			password: "lisa123",
		},
		{
			firstName: "Semyon",
			lastName: "Lastnamovich",
			email: "semyon@yandex.ru",
			gender: "male",
			password: "semyon123",
		},
		{
			firstName: "John",
			lastName: "Lastnamovich",
			email: "john@yandex.ru",
			gender: "male",
			password: "john123",
		},
	];

	getAllUsers(): string | CreateUserDto[] {
		if (this.authService.isAuthenticated) return this.users;
		return "You are mot logged";
	}

	getUserById(id: number): undefined {
		// return this.users.find((user) => user.id === id);
	}

	createUser(user: CreateUserDto) {
		this.users.push(user);
	}
}
