export namespace GlobalTypes{
  export interface PaginationResponse <R=unknown> {
    data: R[]
    pagination: {
      total_pages: number
      page: number
      size: number
    }
  }

}
