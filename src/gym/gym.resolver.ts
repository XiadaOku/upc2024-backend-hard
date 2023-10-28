import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { GymService } from './gym.service';
import { Gym } from './entities/gym.entity';
import { CreateGymInput } from './dto/create-gym.input';
import { UpdateGymInput } from './dto/update-gym.input';

@Resolver(() => Gym)
export class GymResolver {
  constructor(private readonly gymService: GymService) {}

  @Mutation(() => Gym)
  createGym(@Args('createGymInput') createGymInput: CreateGymInput) {
    return this.gymService.create(createGymInput);
  }

  @Query(() => [Gym], { name: 'gyms' })
  findAll() {
    return this.gymService.findAll();
  }

  @Query(() => Gym, { name: 'gym' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gymService.findOne(id);
  }

  @Mutation(() => Gym)
  updateGym(@Args('id', { type: () => Int }) id: number, @Args('updateGymInput') updateGymInput: UpdateGymInput) {
    return this.gymService.update(id, updateGymInput);
  }

  @Mutation(() => Gym)
  removeGym(@Args('id', { type: () => Int }) id: number) {
    return this.gymService.remove(id);
  }

  @ResolveField()
  trainings(@Parent() gym: Gym) {
    const { id } = gym;
    return this.gymService.resolveTrainings(id);
  }
}
