import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PurchaseService } from './purchase.service';
import { Purchase } from './entities/purchase.entity';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { UpdatePurchaseInput } from './dto/update-purchase.input';

@Resolver(() => Purchase)
export class PurchaseResolver {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Mutation(() => Purchase)
  createPurchase(@Args('createPurchaseInput') createPurchaseInput: CreatePurchaseInput) {
    return this.purchaseService.create(createPurchaseInput);
  }

  @Query(() => [Purchase], { name: 'purchases' })
  findAll() {
    return this.purchaseService.findAll();
  }

  @Query(() => [Purchase], { name: 'customerPurchases' })
  findCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.purchaseService.findCustomer(id);
  }

  @Query(() => Purchase, { name: 'purchase' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.purchaseService.findOne(id);
  }

  @Mutation(() => Purchase)
  updatePurchase(@Args('id', { type: () => Int }) id: number, @Args('updatePurchaseInput') updatePurchaseInput: UpdatePurchaseInput) {
    return this.purchaseService.update(id, updatePurchaseInput);
  }

  @Mutation(() => Purchase)
  removePurchase(@Args('id', { type: () => Int }) id: number) {
    return this.purchaseService.remove(id);
  }

  @Mutation(() => Purchase)
  purchaseTraining(@Args('id', { type: () => Int }) id: number, @Args('customerId', { type: () => Int }) userId: number) {
    return this.purchaseService.purchaseTraining(id, userId);
  }

  @ResolveField()
  training(@Parent() purchase: Purchase) {
    const { id } = purchase;
    return this.purchaseService.resolveTraining(id);
  }

  @ResolveField()
  customer(@Parent() purchase: Purchase) {
    const { id } = purchase;
    return this.purchaseService.resolveCustomer(id);
  }

  @ResolveField()
  income(@Parent() purchase: Purchase) {
    return purchase.price * 0.8;
  }
}
