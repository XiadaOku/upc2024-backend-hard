import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseResolver } from './purchase.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PurchaseResolver, PurchaseService, PrismaService]
})
export class PurchaseModule {}
