export interface ServiceResult<T> {
  errors?: string[],
  data?: T,
}

const createServiceResult = <T>(errors?: string[], data?: T): ServiceResult<T> => ({
  errors,
  data,
})

export const createErrorServiceResult = <T>(
  ...message: string[]): ServiceResult<T> => createServiceResult<T>([...message])

export const createSuccessServiceResult = <T>(
  data: T): ServiceResult<T> => createServiceResult<T>(undefined, data)
