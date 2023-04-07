import { useContext } from 'react'

import { LocationContext } from '~/contexts/LocationContext'

export function useLocation() {
  const context = useContext(LocationContext)

  return context
}
