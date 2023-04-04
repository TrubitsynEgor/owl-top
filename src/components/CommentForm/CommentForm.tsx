import { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'
import styles from './CommentForm.module.scss'
import { Input } from '../UI/Input/Input'
import { Rating } from '../Rating/Rating'
import { TextArea } from '../UI/TextArea/TextArea'
import { Button } from '../UI/Button/Button'
import CloseIcon from './close.svg'
import { useForm, Controller } from 'react-hook-form'


interface CommentFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	productId: string
}

export interface ICommentForm {
	name: string
	title: string
	description: string
	rating: number
}

const CommentForm = ({ productId }: CommentFormProps) => {

	const { register, control, handleSubmit, formState: { errors } } = useForm<ICommentForm>()


	const onSubmit = (data: ICommentForm) => {
		console.log(data);

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

			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш комментарий отправлен!</div>
				<div className={styles.successCaption}>Спасибо что отправили комментарий, он будет опубликован после проверки</div>
				<CloseIcon className={styles.successIcon} />
			</div>
		</form>


	)
}

export default CommentForm