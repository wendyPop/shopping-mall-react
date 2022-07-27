import { Product } from '../types'

const ProductDetail = ({
    item :  {
        category,
        title,
        image,
        description,
        price,
        rating: { rate }
    }
}: {
    item: Product
}) => (
        <div className={'products-detail'}>
            <h2>상품상세</h2>
            <p className={'products-detail__category'}>{category}</p>
            <p className={'products-detail__description'}>{description}</p>
            <img src={image} className={'products-detail__image'}/>
            <span className={'products-detail__price'}>{price}</span>
            {/*<span className={'products-detail__rating'}>{rating}</span>*/}
        </div>
    )

export default ProductDetail
