import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService,
	) {}

	isAuthenticated: boolean = false;

	login(email: string, password: string): string {
		const user = this.usersService.users.find(
			(user) => user.email === email && user.password === password,
		);
		if (user) {
			this.isAuthenticated = true;
			return "MY_TOKEN";
		}
		this.isAuthenticated = false;
		return "Userd doesn`t exist!";
	}
}
