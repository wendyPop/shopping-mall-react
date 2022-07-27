import { Product } from '../types'
import { Link } from 'react-router-dom'

const ProductItem = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title
}: Product) => (
    <li className={'products-item'}>
        <Link to={`/products/${id}`}>
            <p className={'products-item__category'}>{ category }</p>
            <p className={'products-item__description'}>{ description }</p>
            <img src={image} className={'products-item__image'}/>
            <span className={'products-item__price'}>{price}</span>
            <span className={'products-item__rating'}>{rating.rate}</span>
        </Link>
    </li>
)

export default ProductItem
