import { InputType, Int, Field } from '@nestjs/graphql';
import { TrainingType } from '@prisma/client';

@InputType()
export class CreateTrainingInput {
  @Field(() => TrainingType)
  type: TrainingType;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  gym_id: number;
}