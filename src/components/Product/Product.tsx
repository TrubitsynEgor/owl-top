import { ProductModel } from '@/interfaces/product.interface'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { Card } from '../UI/Card/Card'
import styles from './Product.module.scss'
import { Htag } from '../UI/Htag/Htag'
import { Tag } from '../UI/Tag/Tag'
import { Rating } from '../Rating/Rating'
import { inflectString, priceRu } from '@/helpers/helpers'
import { P } from '../UI/P/P'
import { Button } from '../UI/Button/Button'
import Image from 'next/image'
import Comment from '../Comment/Comment'
import cl from 'classnames'
import CommentForm from '../CommentForm/CommentForm'


interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel
}

const Product = ({ product }: ProductProps) => {

	const [isCommentOpened, setIsCommentOpened] = useState<boolean>(false)

	return (
		<>
			<Card className={styles.product}>
				<div className={styles.head}>

					<div className={styles.right}>
						<div className={styles.logo}><Image width={70} height={70} className={styles.img} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
						<div className={styles.titleWrap}>
							<Htag tag='h3' className={styles.title}>{product.title}</Htag>
							<div className={styles.tags}>{product.categories.map(c => <Tag key={c} size='small' color='ghost'>{c}</Tag>)}</div>
						</div>
					</div>

					<div className={styles.left}>
						<div className={styles.price}>
							{priceRu(product.price)}
							<Tag className={styles.tag} color='green'>-
								{product.oldPrice && priceRu(product.oldPrice - product.price)}
							</Tag>
							<span className={styles.info}>цена</span>
						</div>
						<div className={styles.credit}>{priceRu(product.credit)}<span className={styles.suffix}>/мес</span>
							<span className={styles.info}>в кредит</span>
						</div>
						<div className={styles.rating}>
							<Rating rating={product.reviewAvg ?? product.initialRating} />
							<span className={styles.info}>{product.reviewCount} {inflectString(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</span>
						</div>
					</div>
				</div>

				<hr />
				<P>{product.description}</P>

				<div className={styles.benefits}>

					<div className={styles.feature}>
						{product.characteristics.map(c => (
							<div className={styles.characteristic} key={c.name}>
								<span className={styles.name}>{c.name}</span>
								<span className={styles.dots}></span>
								<span className={styles.value}>{c.value}</span>

							</div>
						))}
					</div>

					<div className={styles.advantagesWrapper}>
						<div className={styles.advantages}>
							<h4>Преимущества</h4>
							{product.advantages && <P>{product.advantages}</P>}
						</div>
						<div className={styles.disadvantages}>
							<h4>Недостатки</h4>
							{product.disadvantages && <P>{product.disadvantages}</P>}
						</div>

					</div>
				</div>

				<hr />

				<div className={styles.actions}>
					<Button appearance='primary' >Узнать подробнее</Button>
					<Button onClick={() => setIsCommentOpened(!isCommentOpened)} appearance='ghost'
						arrow={isCommentOpened ? 'down' : 'right'}>
						Читать отзывы
					</Button>
				</div>

			</Card>
			<Card className={cl(styles.comment, {
				[styles.opened]: isCommentOpened,
				[styles.closed]: !isCommentOpened
			})} color='blue'>{product.reviews.map(review => (
				<Comment review={review} key={review._id} />
			))}
				<CommentForm productId={product._id} />
			</Card>


		</>
	)
}

export default Product