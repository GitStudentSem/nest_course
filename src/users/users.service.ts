import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";

@Injectable()
export class UsersService {
	users: CreateUserDto[] = [
		{
			id: 1,
			name: "Lisa",
			email: "lisa@yandex.ru",
			gender: "female",
			isMarried: false,
		},
		{
			id: 2,
			name: "Semyon",
			email: "semyon@yandex.ru",
			gender: "male",
			isMarried: false,
		},
		{
			id: 3,
			name: "John",
			email: "john@yandex.ru",
			gender: "male",
			isMarried: true,
		},
	];

	getAllUsers(): CreateUserDto[] {
		return this.users;
	}

	getUserById(id: number): CreateUserDto | undefined {
		return this.users.find((user) => user.id === id);
	}

	createUser(user: CreateUserDto) {
		this.users.push(user);
	}
}
