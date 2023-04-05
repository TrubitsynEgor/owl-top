import { ProductModel } from '@/interfaces/product.interface'
import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, forwardRef, useRef, useState } from 'react'
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
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel
}

const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {

	const [isCommentOpened, setIsCommentOpened] = useState<boolean>(false)
	const commentRef = useRef<HTMLDivElement>(null)
	const scrollToComment = () => {
		setIsCommentOpened(true)
		commentRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
		commentRef.current?.focus()
	}

	const variants = {
		visible: {
			padding: 30,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
			padding: 0,
		}
	}
	const variantsChildren = {
		visible: {

			height: 'auto',
			opacity: 1,
			visibility: 'visible'
		},
		hidden: {
			height: 0,
			opacity: 0,
			visibility: 'hidden'
		}
	}

	return (
		<div className={className} ref={ref} {...props}>
			<Card className={styles.product} >
				<div className={styles.head}>

					<div className={styles.right}>
						<div className={styles.logo}><Image aria-hidden width={70} height={70} className={styles.img} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
						<div className={styles.titleWrap}>
							<Htag tag='h3' className={styles.title}>{product.title}</Htag>
							<div className={styles.tags}>{product.categories.map(c => <Tag key={c} size='small' color='ghost'>{c}</Tag>)}</div>
						</div>
					</div>

					<div className={styles.left}>
						<div className={styles.price}>
							<span className='visualyHidden'>цена</span>{priceRu(product.price)}
							<Tag className={styles.tag} color='green'>	<span className='visualyHidden'>скидка</span>-
								{product.oldPrice && priceRu(product.oldPrice - product.price)}
							</Tag>
							<span aria-hidden className={styles.info}>цена</span>
						</div>
						<div className={styles.credit}><span className='visualyHidden'>кредит</span>{priceRu(product.credit)}<span className={styles.suffix}>/мес</span>
							<span aria-hidden className={styles.info}>в кредит</span>
						</div>
						<div className={styles.rating}>
							<span className='visualyHidden'>{'рейтинг' + product.reviewAvg ?? product.initialRating}</span>
							<Rating rating={product.reviewAvg ?? product.initialRating} />
							<span className={styles.info}>
								<Link href="#ref" onClick={scrollToComment}>	{product.reviewCount} {inflectString(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</Link>
							</span>
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
						arrow={isCommentOpened ? 'down' : 'right'} >
						Читать отзывы
					</Button>
				</div>

			</Card>



			<Card ref={commentRef} tabIndex={isCommentOpened ? 0 : -1} color='blue' className={cl(styles.comment)} layout variants={variants}
				initial={isCommentOpened ? 'visible' : 'hidden'}
				animate={isCommentOpened ? 'visible' : 'hidden'}>
				<motion.div variants={variantsChildren}>
					{product.reviews.map(review => (
						<Comment tabIndex={0} review={review} key={review._id} />
					))}
					<CommentForm productId={product._id} />
				</motion.div>
			</Card>



		</div >
	)
}))

export default Product