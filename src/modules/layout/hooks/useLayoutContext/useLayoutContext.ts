import { useContext } from 'react'
import LayoutContext, { LayoutContextStore } from '../../contexts/LayoutContext/LayoutContext'

const useLayoutContext = () => {
  const layoutContextData = useContext<LayoutContextStore | undefined>(LayoutContext)

  if (!layoutContextData)
    throw new Error('useLayoutContext hook must be used inside LayoutProvider.')

  return layoutContextData
}

export default useLayoutContext
