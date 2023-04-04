import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Card } from '../UI/Card/Card'
import styles from './Comment.module.scss'
import { Rating } from '../Rating/Rating'
import { P } from '../UI/P/P'
import { ReviewModel } from '@/interfaces/product.interface'
import AvatarIcon from './avatar.svg'
import CommentForm from '../CommentForm/CommentForm'
import { ru } from 'date-fns/locale'
import { format } from 'date-fns'

interface CommentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel
}

const Comment = ({ review, ...props }: CommentProps) => {

	const { name, title, description, createdAt, rating } = review
	return (
		<Card color='blue' className={styles.comment} {...props}>
			<div className={styles.head}>

				<div className={styles.left}>
					<AvatarIcon className={styles.avatar} />
					<div className={styles.name}>{name}:</div>
					<span>{title}</span>
				</div>

				<div className={styles.right}>
					<span>{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}</span>
					<Rating rating={rating} />
				</div>

			</div>

			<P size='small'>{description}</P>
			<hr className={styles.hr} />

			<CommentForm />
		</Card>
	)
}

export default Comment