import { useQuery } from 'react-query'
import { fetcher, QueryKeys } from '../../queryClient'
import { Product } from '../../types'
import ProductDetailPage from '../../components/item'

const ProductList = () => {

    const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: '/products',
    }))

    return <div>
        <h2>상품목록</h2>
        <ul className={'products'}>
            { data ?.map(product => (
                <ProductDetailPage { ...product } key={product.id} />
            ))}
        </ul>
    </div>
}

export default ProductList
