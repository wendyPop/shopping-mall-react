import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {useRoutes} from 'react-router-dom'
import {routes} from './routes'
import { getClient } from './queryClient'

const App = () => {
    const elem =  useRoutes(routes)
    const queryClient = getClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {elem}
        </QueryClientProvider>
    )
}

export default App
