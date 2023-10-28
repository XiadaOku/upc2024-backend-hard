import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePurchaseInput {
  @Field(() => Int, { nullable: true })
  price: number;
}
