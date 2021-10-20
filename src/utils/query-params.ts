export const convertObjectToQueryparams = (params: any): string => {
  if (!params) {
    return ''
  }
  let queryParams = ''
  Object.keys(params).forEach((attribute, index) => {
    queryParams += `${index === 0 ? '?' : '&'}`
    queryParams += `${attribute}=${params[attribute]}`
  })
  return queryParams
}
