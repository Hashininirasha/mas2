export interface StateObjectDto<T> {
    data: T,
    isLoading: boolean,
    error: null,
    status: 'initial' | 'loading' | 'success' | 'error' | null
}