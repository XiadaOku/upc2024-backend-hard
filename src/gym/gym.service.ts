import { Injectable } from '@nestjs/common';
import { CreateGymInput } from './dto/create-gym.input';
import { UpdateGymInput } from './dto/update-gym.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GymService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGymInput: CreateGymInput) {
    const gym = await this.prismaService.gym.create({
      data: {
        ...createGymInput
      }
    });
    return gym;
  }

  async findAll() {
    const gyms = await this.prismaService.gym.findMany();
    return gyms;
  }

  async findOne(id: number) {
    const gym = await this.prismaService.gym.findFirst({
      where: {
        id: id
      }
    });
    return gym;
  }

  async update(id: number, updateGymInput: UpdateGymInput) {
    const gym = await this.prismaService.gym.update({
      where: {
        id: id
      },
      data: {
        ...updateGymInput
      }
    });
    return gym;
  }

  async remove(id: number) {
    const gym = await this.prismaService.gym.delete({
      where: {
        id: id
      }
    });
    return gym;
  }

  async resolveTrainings(id: number) {
    const trainings = await this.prismaService.training.findMany({
      where: {
        gym_id: id
      }
    });
    return trainings;
  }
}
