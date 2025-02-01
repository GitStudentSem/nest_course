import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

export interface ITweetWithName {
	text: string;
	date: Date;
	name: string | undefined;
}

@Injectable()
export class TweetService {
	constructor(private readonly usersService: UsersService) {}

	getTweets(userId: number): string {
		return "get tweets";
	}
}
