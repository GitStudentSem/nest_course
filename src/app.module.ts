import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TweetModule } from "./tweet/tweet.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from './auth/auth.module';

@Module({
	/** Внутренние использованные модули */
	imports: [UsersModule, TweetModule, AuthModule],
	/** Отвечает за прослушку запросов */
	controllers: [AppController],
	/** Содержит бизнес логику модуля */
	providers: [AppService],
})
export class AppModule {}
