import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { TrainingType } from '@prisma/client';
import { Gym } from 'src/gym/entities/gym.entity';
import { Purchase } from 'src/purchase/entities/purchase.entity';


registerEnumType(TrainingType, {
  name: 'TrainingType',
});

@ObjectType()
export class Training {
  @Field(() => Int)
  id: number;

  @Field(() => TrainingType)
  type: TrainingType;

  @Field(() => Int)
  price: number;

  @Field(() => Gym)
  gym: Gym;

  @Field(() => [Purchase])
  purchases: Purchase[];
}