import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  email: string;
}
