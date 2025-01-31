import { Injectable } from "@nestjs/common";
import type { IUser } from "./users.types";

@Injectable()
export class UsersService {
	users: IUser[] = [
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

	getAllUsers(): IUser[] {
		return this.users;
	}

	getUserById(id: number): IUser | undefined {
		return this.users.find((user) => user.id === id);
	}

	createUser(user: IUser) {
		this.users.push(user);
	}
}
