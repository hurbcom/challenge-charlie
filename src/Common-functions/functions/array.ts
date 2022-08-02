export const head = (arr: any[]) => (arr && arr.length ? arr[0] : undefined)

export const tail = (arr: any[]) => (arr && arr.length ? arr[arr.length - 1] : undefined)

export const slice = (arr: any[], start: number, end: number) => (arr.slice(start, end))
