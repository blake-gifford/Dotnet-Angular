
export interface Pagination<T> {
    pageIndes: number;
    pageSize: number;
    count: number;
    data: T;
}