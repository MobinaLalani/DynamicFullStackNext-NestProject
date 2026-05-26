import { Injectable, NotFoundException } from '@nestjs/common';
import { PageSchema } from './page-builder.types';

@Injectable()
export class PageBuilderService {
  getPage(slug: string): PageSchema {
    const pages: Record<string, PageSchema> = {
      users: {
        pageId: 'users',

        title: 'Users Page',

        components: [
          {
            id: 'input-search',

            type: 'input',

            label: 'Search User',

            placeholder: 'Enter username...',

            field: 'search',
          },

          {
            id: 'btn-search',

            type: 'button',

            text: 'Search',
          },

          {
            id: 'users-table',

            type: 'table',

            columns: [
              {
                title: 'Id',

                field: 'id',
              },

              {
                title: 'Name',

                field: 'name',
              },
            ],

            data: [
              {
                id: 1,

                name: 'Mobina',
              },
            ],
          },
        ],
      },
    };

    const page = pages[slug];

    if (!page) {
      throw new NotFoundException('Page Not Found');
    }

    return page;
  }
}
