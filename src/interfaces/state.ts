export interface Observer {
  update: (loading: boolean) => void
}

export interface IObservable {
  subscribe: (observer: Observer) => void
  unsubscribe: (observer: Observer) => void
}
