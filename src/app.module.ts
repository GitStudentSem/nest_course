import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TweetModule } from "./tweet/tweet.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/user.entity";
import { ProfileModule } from "./profile/profile.module";

@Module({
	/** Внутренние использованные модули */
	imports: [
		UsersModule,
		TweetModule,
		AuthModule,
		TypeOrmModule.forRootAsync({
			inject: [],
			imports: [],
			useFactory: () => ({
				type: "postgres",
				// entities: [User],
				autoLoadEntities: true,
				synchronize: true,
				host: "localhost",
				port: 5432,
				username: "postgres",
				password: "120399",
				database: "nestjs",
			}),
		}),
		ProfileModule,
	],
	/** Отвечает за прослушку запросов */
	controllers: [AppController],
	/** Содержит бизнес логику модуля */
	providers: [AppService],
})
export class AppModule {}
