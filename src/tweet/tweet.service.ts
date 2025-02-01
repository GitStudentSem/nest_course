import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { text } from "stream/consumers";

interface ITweet {
	text: string;
	date: Date;
	userId: number;
}
export interface ITweetWithName {
	text: string;
	date: Date;
	name: string | undefined;
}
@Injectable()
export class TweetService {
	constructor(private readonly usersService: UsersService) {}

	tweets: ITweet[] = [
		{ text: "some tweet 1", date: new Date("2024-11-12"), userId: 1 },
		{ text: "some tweet 2", date: new Date("2024-08-12"), userId: 1 },
		{ text: "some tweet 3", date: new Date("2023-11-12"), userId: 2 },
	];

	getTweets(userId: number): ITweetWithName[] {
		const user = this.usersService.getUserById(userId);
		const tweets = this.tweets.filter((tweet) => tweet.userId === userId);
		const response = tweets.map((tweet) => {
			return { text: tweet.text, date: tweet.date, name: user?.name };
		});
		return response;
	}
}
