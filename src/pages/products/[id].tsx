import { useQuery } from 'react-query'
import {Link, useParams} from 'react-router-dom'
import { fetcher, QueryKeys } from '../../queryClient'
import { Product } from '../../types'
import  ProductDetail from '../../components/detail'

const Detail = () => {

    const { id } = useParams()
    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id],
        () =>
            fetcher({
                method: 'GET',
                path: `/products/${id}`
            }),
    )

    if (!data) return <div>대기중</div>

    const {
        category,
        title,
        description,
        image,
        price,
        rating: {
            rate
        }
    } = data

    return (
        <ProductDetail item={data} />
    )
}

export default Detail
