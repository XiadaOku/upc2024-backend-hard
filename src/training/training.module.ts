import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingResolver } from './training.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TrainingResolver, TrainingService, PrismaService]
})
export class TrainingModule {}
