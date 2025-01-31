import type { IUser } from "./users.types";

export class UsersService {
	users: IUser[] = [
		{
			id: 1,
			name: "John",
			age: 28,
			gender: "male",
			isMarried: true,
		},
		{
			id: 2,
			name: "Semyon",
			age: 25,
			gender: "male",
			isMarried: false,
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
