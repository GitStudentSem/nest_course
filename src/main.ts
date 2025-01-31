import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			/** Стирает поля которые не были объясвлены в DTO */
			whitelist: true,
			/** Выдает клиенту ошибку за отправку ненужных полей */
			forbidNonWhitelisted: true,
			/** Кастует тип из полей DTO */
			transform: true,
		}),
	);
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
