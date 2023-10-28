import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCustomerInput: CreateCustomerInput) {
    const user = await this.prismaService.customer.create({
      data: {
        ...createCustomerInput
      }
    });
    return user;
  }

  async findAll() {
    const users = await this.prismaService.customer.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prismaService.customer.findFirst({
      where: {
        id: id
      }
    });
    return user;
  }

  async update(id: number, updateCustomerInput: UpdateCustomerInput) {
    const user = await this.prismaService.customer.update({
      where: {
        id: id
      },
      data: {
        ...updateCustomerInput
      }
    });
    return user;
  }

  async remove(id: number) {
    const user = await this.prismaService.customer.delete({
      where: {
        id: id
      }
    });
    return user;
  }

  async resolveRegister(id: number) {
    const purchases = await this.prismaService.purchase.findMany({
      where: {
        customer_id: id
      }
    });
    return purchases;
  }
}
