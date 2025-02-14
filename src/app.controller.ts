import { Controller, Get, Post } from "@nestjs/common";
// biome-ignore lint/style/useImportType: <explanation>
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Post()
	postHello(): string {
		return "Post request successful";
	}
}
