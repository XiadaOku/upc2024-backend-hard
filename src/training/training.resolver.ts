import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { TrainingService } from './training.service';
import { Training } from './entities/training.entity';
import { CreateTrainingInput } from './dto/create-training.input';
import { UpdateTrainingInput } from './dto/update-training.input';

@Resolver(() => Training)
export class TrainingResolver {
  constructor(private readonly trainingService: TrainingService) {}

  @Mutation(() => Training)
  createTraining(@Args('createTrainingInput') createTrainingInput: CreateTrainingInput) {
    return this.trainingService.create(createTrainingInput);
  }

  @Query(() => [Training], { name: 'trainings' })
  findAll() {
    return this.trainingService.findAll();
  }

  @Query(() => Training, { name: 'training' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.trainingService.findOne(id);
  }

  @Mutation(() => Training)
  updateTraining(@Args('id', { type: () => Int }) id: number, @Args('updateTrainingInput') updateTrainingInput: UpdateTrainingInput) {
    return this.trainingService.update(id, updateTrainingInput);
  }

  @Mutation(() => Training)
  removeTraining(@Args('id', { type: () => Int }) id: number) {
    return this.trainingService.remove(id);
  }

  @ResolveField()
  gym(@Parent() training: Training) {
    const { id } = training;
    return this.trainingService.resolveGym(id);
  }

  @ResolveField()
  purchases(@Parent() training: Training) {
    const { id } = training;
    return this.trainingService.resolvePurchases(id);
  }
}
