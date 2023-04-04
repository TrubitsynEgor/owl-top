import { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'
import styles from './CommentForm.module.scss'
import { Input } from '../UI/Input/Input'
import { Rating } from '../Rating/Rating'
import { TextArea } from '../UI/TextArea/TextArea'
import { Button } from '../UI/Button/Button'


interface CommentFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
}

const CommentForm = ({ }: CommentFormProps) => {
	const [rating, setRating] = useState<number>(0)

	return (
		<form action="#" className={styles.commentForm}>
			<div className={styles.top}>
				<Input className={styles.input} placeholder='Имя' name='name' />
				<Input className={styles.input} placeholder='Заголовок отзыва' />
				<span className={styles.rating}>Оценка:<Rating rating={rating} isEditable setRating={setRating} /></span>
			</div>
			<TextArea className={styles.textArea} />
			<div className={styles.bot}>
				<Button appearance='primary' className={styles.btn}>Отправить</Button>
				<span className={styles.caption}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
		</form>
	)
}

export default CommentForm