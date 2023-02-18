import { IObservable } from '@/interfaces'
import { useEffect, useState } from 'react'

import './styles.scss'

interface Props {
  observable: IObservable
}

export const LoadingOverlay = ({ observable }: Props) => {
  const [state, setState] = useState(false)

  const handleUpdate = {
    update: (loading: boolean) => {
      setState(loading)
    },
  }

  useEffect(() => {
    observable.subscribe(handleUpdate)

    return () => {
      observable.unsubscribe(handleUpdate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observable])

  if (!state) return null

  return (
    <div className='loading'>
      <div className='loading__content'>
        <div className='loading__content__spinner' />

        <div className='loading__content__text'>Carregando...</div>
      </div>
    </div>
  )
}
