import { QueryClientProvider } from 'react-query'
import queryClient from './configs/queryClient'
import LayoutContainer from './modules/layout/components/LayoutContainer'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContainer />
    </QueryClientProvider>
  )
}

export default App
