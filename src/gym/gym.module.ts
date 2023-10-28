import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymResolver } from './gym.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GymResolver, GymService, PrismaService]
})
export class GymModule {}
