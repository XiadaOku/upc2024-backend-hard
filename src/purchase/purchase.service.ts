import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { UpdatePurchaseInput } from './dto/update-purchase.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PurchaseService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPurchaseInput: CreatePurchaseInput) {
    const purchase = await this.prismaService.purchase.create({
      data: {
        ...createPurchaseInput
      }
    });
    return purchase;
  }

  async findAll() {
    const purchases = await this.prismaService.purchase.findMany();
    return purchases;
  }

  async findCustomer(id: number) {
    const purchases = await this.prismaService.purchase.findFirst({
      where: {
        customer_id: id
      }
    })
    return purchases;
  }

  async findOne(id: number) {
    const purchase = await this.prismaService.purchase.findFirst({
      where: {
        id: id
      }
    })
    return purchase;
  }

  async update(id: number, updatePurchaseInput: UpdatePurchaseInput) {
    const purchase = await this.prismaService.purchase.update({
      where: {
        id: id
      },
      data: {
        ...updatePurchaseInput
      }
    });
    return purchase;
  }

  async remove(id: number) {
    const purchase = await this.prismaService.purchase.delete({
      where: {
        id: id
      }
    });
    return purchase;
  }

  async purchaseTraining(id: number, userId: number) {
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

    if (gym.avaliable_slots <= 0) {
      throw new HttpException('No more avaliable slots', HttpStatus.FORBIDDEN);
    }

    const purchase = await this.prismaService.purchase.create({
      data: {
        price: training.price,
        training_id: id,
        customer_id: userId
      }
    });

    await this.prismaService.gym.update({
      where: {
        id: gym.id
      },
      data: {
        avaliable_slots: gym.avaliable_slots - 1
      }
    });

    return purchase;
  }

  async resolveTraining(id: number) {
    const { training_id } = await this.prismaService.purchase.findFirst({
      where: {
        id: id
      }
    });
    const training = await this.prismaService.training.findFirst({
      where: {
        id: training_id
      }
    });
    return training;
  }

  async resolveCustomer(id: number) {
    const { customer_id } = await this.prismaService.purchase.findFirst({
      where: {
        id: id
      }
    });
    const user = await this.prismaService.customer.findFirst({
      where: {
        id: customer_id
      }
    });
    return user;
  }
}
