import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePurchaseInput {
  @Field(() => Int)
  price: number;

  @Field(() => Int)
  training_id: number;

  @Field(() => Int)
  customer_id: number;
}
