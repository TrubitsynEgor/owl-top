import { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'
import styles from './CommentForm.module.scss'
import { Input } from '../UI/Input/Input'
import { Rating } from '../Rating/Rating'
import { TextArea } from '../UI/TextArea/TextArea'
import { Button } from '../UI/Button/Button'
import CloseIcon from './close.svg'


interface CommentFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	productId: string
}

const CommentForm = ({ productId }: CommentFormProps) => {
	const [rating, setRating] = useState<number>(0)

	return (
		<>
			<form action="#" className={styles.commentForm}>
				<div className={styles.top}>
					<Input className={styles.input} placeholder='Имя' name='name' />
					<Input className={styles.input} placeholder='Заголовок отзыва' />
					<span className={styles.rating}>Оценка:<Rating rating={rating} isEditable setRating={setRating} /></span>
				</div>
				<TextArea placeholder='Текст отзыва' className={styles.textArea} />
				<div className={styles.bot}>
					<Button appearance='primary' className={styles.btn}>Отправить</Button>
					<span className={styles.caption}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</form>

			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш комментарий отправлен!</div>
				<div className={styles.successCaption}>Спасибо что отправили комментарий, он будет опубликован после проверки</div>
				<CloseIcon className={styles.successIcon} />
			</div>
		</>
	)
}

export default CommentForm