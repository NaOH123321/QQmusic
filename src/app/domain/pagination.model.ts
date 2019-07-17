export interface Pagination {
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  totalItemsCount?: number;
}

export interface DataWithPagination {
  array: any[];
  pagination?: Pagination;
}
