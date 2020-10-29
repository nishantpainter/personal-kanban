export type Record = {
  id: string;
  title: string;
  description?: string;
  caption?: string;
};

export type Column = {
  id: string;
  title: string;
  description?: string;
  caption?: string;
  records?: Record[];
};
