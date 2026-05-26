import { Module } from '@nestjs/common';
import { PageBuilderController } from './page-builder.controller';
import { PageBuilderService } from './page-builder.service';

@Module({
  controllers: [PageBuilderController],
  providers: [PageBuilderService],
})
export class PageBuilderModule {}
