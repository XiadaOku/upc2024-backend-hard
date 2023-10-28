import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGymInput {
  @Field()
  title: string;

  @Field()
  admin_name: string;

  @Field()
  admin_number: string;

  @Field(() => Int)
  avaliable_slots: number;
}
