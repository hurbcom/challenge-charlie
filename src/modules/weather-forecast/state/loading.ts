import { IObservable, Observer } from '@/interfaces'

class LoadingState implements IObservable {
  private observers: Observer[] = []
  private loading = false
  private static instance: LoadingState

  public static getInstance() {
    if (!LoadingState.instance) {
      LoadingState.instance = new LoadingState()
    }
    return LoadingState.instance
  }

  public subscribe(observer: Observer) {
    this.observers.push(observer)
  }

  public unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(
      (_observer) => _observer !== observer
    )
  }

  public setLoading(loading: boolean) {
    this.loading = loading
    this.notify()
  }

  private notify() {
    this.observers.forEach((observer) => observer.update(this.loading))
  }
}

export const loadingState = LoadingState.getInstance()
