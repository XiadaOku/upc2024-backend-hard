import { Injectable } from '@nestjs/common';
import { CreateTrainingInput } from './dto/create-training.input';
import { UpdateTrainingInput } from './dto/update-training.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TrainingService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTrainingInput: CreateTrainingInput) {
    const training = await this.prismaService.training.create({
      data: {
        ...createTrainingInput
      }
    });
    return training;
  }

  async findAll() {
    const trainings = await this.prismaService.training.findMany();
    return trainings;
  }

  async findOne(id: number) {
    const training = await this.prismaService.training.findFirst({
      where: {
        id: id
      }
    });
    return training;
  }

  async update(id: number, updateTrainingInput: UpdateTrainingInput) {
    const training = await this.prismaService.training.update({
      where: {
        id: id
      },
      data: {
        ...updateTrainingInput
      }
    });
    return training;
  }

  async remove(id: number) {
    const training = await this.prismaService.training.delete({
      where: {
        id: id
      }
    });
    return training;
  }

  async resolveGym(id: number) {
    const training = await this.prismaService.training.findFirst({
      where: {
        id: id
      }
    });
    const gym = await this.prismaService.gym.findFirst({
      where: {
        id: training.gym_id
      }
    });
    return gym;
  }

  async resolvePurchases(id: number) {
    const purchases = await this.prismaService.purchase.findMany({
      where: {
        training_id: id
      }
    });
    return purchases;
  }
}
