import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Customer } from 'src/customer/entities/customer.entity';
import { Training } from 'src/training/entities/training.entity';

@ObjectType()
export class Purchase {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  income: number;

  @Field(() => Training)
  training: Training;

  @Field(() => Customer)
  customer: Customer;
}