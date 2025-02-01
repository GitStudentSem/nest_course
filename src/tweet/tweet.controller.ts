import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ITweetWithName, TweetService } from "./tweet.service";

@Controller("tweet")
export class TweetController {
	constructor(private tweetService: TweetService) {}

	@Get("/:userId")
	public getTweets(@Param("userId", ParseIntPipe) userId: number): string {
		return this.tweetService.getTweets(userId);
	}
}
