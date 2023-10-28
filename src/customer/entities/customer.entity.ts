import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@ObjectType()
export class Customer {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [Purchase], { nullable: true })
  register: Purchase[];
}