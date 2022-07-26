import { QueryClient } from 'react-query'

// import { getTodos, postTodo } from '../my-api'

// Create a client
// 싱글톤 작업! 한번만 만들기
export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if (!client) client = new QueryClient()
        return client
    }
})()
