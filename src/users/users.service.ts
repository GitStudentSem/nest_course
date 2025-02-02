import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.enity";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,

		@InjectRepository(Profile)
		private profileRepository: Repository<Profile>,
	) {}

	getAllUsers() {
		return this.userRepository.find({ relations: { profile: true } });
	}

	public async createUser(userDto: CreateUserDto) {
		userDto.profile = userDto.profile ?? {};

		//@ts-ignore
		let user = this.userRepository.create(userDto);

		return await this.userRepository.save(user);
	}

	public async deleteUser(id: number) {
		await this.userRepository.delete(id);

		return { deleted: true };
	}
}
