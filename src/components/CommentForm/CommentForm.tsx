import { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'
import styles from './CommentForm.module.scss'
import { Input } from '../UI/Input/Input'
import { Rating } from '../Rating/Rating'
import { TextArea } from '../UI/TextArea/TextArea'
import { Button } from '../UI/Button/Button'
import CloseIcon from './close.svg'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { API } from '@/helpers/api'


interface CommentFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	productId: string
}

export interface ICommentForm {
	name: string
	title: string
	description: string
	rating: number
}

export interface ICommentSentResponse {
	message: string
}
const CommentForm = ({ productId }: CommentFormProps) => {

	const { register, control, handleSubmit, formState: { errors }, reset } = useForm<ICommentForm>()
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const onSubmit = async (formData: ICommentForm) => {
		try {
			const { data } = await axios.post<ICommentSentResponse>(API.review.createDemo, { ...formData, productId })
			if (data.message) {
				setIsSuccess(true)
				reset()
			} else {
				setError(true)

			}
		} catch (error) {
			if (error instanceof Error) setError(true)
		}
	}


	return (
		<form onSubmit={handleSubmit(onSubmit)} action="#" className={styles.commentForm}>
			<div className={styles.top}>
				<Input {...register('name', { required: { value: true, message: 'Заполните Имя!' } })}
					className={styles.input} placeholder='Имя' name='name' error={errors.name} />
				<Input {...register('title', { required: { value: true, message: 'Заполните Заголовок!' } })}
					className={styles.input} placeholder='Заголовок отзыва' error={errors.title} />

				<span className={styles.rating}>Оценка:
					<Controller control={control} name='rating'
						rules={({ required: { value: true, message: 'Заполните Имя!' } })}

						render={({ field }) => (
							<Rating rating={field.value} ref={field.ref} isEditable setRating={field.onChange} error={errors.rating} />
						)
						} />
				</span>

			</div>
			<TextArea {...register('description', { required: { value: true, message: 'Заполните Заголовок!' } })}
				placeholder='Текст отзыва' className={styles.textArea} error={errors.description} />
			<div className={styles.bot}>
				<Button appearance='primary' className={styles.btn}>Отправить</Button>
				<span className={styles.caption}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>

			{isSuccess && <div className={styles.success}>
				<div className={styles.successTitle}>Ваш комментарий отправлен!</div>
				<div className={styles.successCaption}>Спасибо что отправили комментарий, он будет опубликован после проверки</div>
				<CloseIcon className={styles.successIcon} onClick={() => setIsSuccess(false)} />
			</div>}
			{error && <div className={styles.error}>
				<div className={styles.errorTitle}>Упс! Что то пошло не так, комментарий не отправлен</div>
				<div className={styles.errorCaption}>Просим прощения за причиненное неудобство, мы исправим это как можно скорее</div>
				<CloseIcon className={styles.errorIcon} onClick={() => setError(false)} />
			</div>}
		</form>


	)
}

export default CommentForm