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
			id: 1,
			name: "Lisa",
			email: "lisa@yandex.ru",
			gender: "female",
			isMarried: false,
			password: "lisa123",
		},
		{
			id: 2,
			name: "Semyon",
			email: "semyon@yandex.ru",
			gender: "male",
			isMarried: false,
			password: "semyon123",
		},
		{
			id: 3,
			name: "John",
			email: "john@yandex.ru",
			gender: "male",
			isMarried: true,
			password: "john123",
		},
	];

	getAllUsers(): string | CreateUserDto[] {
		if (this.authService.isAuthenticated) return this.users;
		return "You are mot logged";
	}

	getUserById(id: number): CreateUserDto | undefined {
		return this.users.find((user) => user.id === id);
	}

	createUser(user: CreateUserDto) {
		this.users.push(user);
	}
}
