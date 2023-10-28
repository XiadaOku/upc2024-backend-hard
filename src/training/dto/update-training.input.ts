import { TrainingType } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTrainingInput {
  @Field(() => TrainingType, { nullable: true })
  type: TrainingType;

  @Field(() => Int, { nullable: true })
  price: number;
}
