import { CreateGymInput } from './create-gym.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGymInput extends PartialType(CreateGymInput) {}
