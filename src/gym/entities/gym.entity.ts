import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Training } from 'src/training/entities/training.entity';

@ObjectType()
export class Gym {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  admin_name: string;

  @Field()
  admin_number: string;

  @Field(() => Int)
  avaliable_slots: number;

  @Field(() => [Training], { nullable: true })
  trainings: Training[];
}