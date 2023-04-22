import { CountiesData } from '~/types/Counties'

function normalizeData(data: string): string {
  return data
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function searchCounties(
  data: CountiesData[] | undefined,
  search: string,
): any {
  if (!data) {
    return console.warn('A busca falhou!')
  }

  return data.filter(
    (item) =>
      item.city && normalizeData(item.city).includes(normalizeData(search)),
  )
}
