export type PageComponent = {
  id: string;
  type: string;

  label?: string;
  placeholder?: string;
  field?: string;

  text?: string;

  columns?: {
    title: string;
    field: string;
  }[];

  data?: Record<string, unknown>[];
};

export type PageSchema = {
  pageId: string;
  title: string;

  components: PageComponent[];
};
