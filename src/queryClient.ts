import {QueryClient} from 'react-query'
type AnyOBJ = { [key: string] : any }
const BASE_URL = 'https://fakestoreapi.com'

// 싱글톤 작업! 한번만 만들기
export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if (!client) client = new QueryClient({
            defaultOptions: {
                queries: {
                    cacheTime: 1000 * 60 * 60 * 24,
                    staleTime: 1000 * 60, // 1분
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    refetchOnWindowFocus: false
                }
            }
        })
        return client
    }
})()

export const fetcher = async ({
    method, path, body, params
}: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    body ?: AnyOBJ
    params?: AnyOBJ
}) => {
    try {

        // html5 에 있는 fetch API 를 사용해보고자함
        console.log(path)
        let url = `${BASE_URL}${path}`


        // RequestInit 이라는 타입
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': BASE_URL
            }
        }

        // body param 이 오면
        if(params) {
            const searchParams = new URLSearchParams(params)
            url += '?' + searchParams.toString()
        }

        // body 가 있으면
        if(body) {
            fetchOptions.body = JSON.stringify(body)
        }

        const res = await fetch(url, fetchOptions)

        return await res.json()
    } catch(err) {
        console.error(err)
    }
}

export const QueryKeys = {
    PRODUCTS: 'PRODUCTS',
}
