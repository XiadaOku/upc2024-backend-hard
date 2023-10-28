import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { GymModule } from './gym/gym.module';
import { CustomerModule } from './customer/customer.module';
import { PurchaseModule } from './purchase/purchase.module';
import { TrainingModule } from './training/training.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TrainingModule, 
    GymModule, 
    CustomerModule, 
    PurchaseModule
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
