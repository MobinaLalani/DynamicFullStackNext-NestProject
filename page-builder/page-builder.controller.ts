import { Controller, Get, Param } from '@nestjs/common';
import { PageBuilderService } from './page-builder.service';

@Controller('pages')
export class PageBuilderController {
  constructor(private readonly pageBuilderService: PageBuilderService) {}

  @Get(':slug')
  getPage(@Param('slug') slug: string) {
    return this.pageBuilderService.getPage(slug);
  }
}
