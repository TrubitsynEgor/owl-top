import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'
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

	const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<ICommentForm>()
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

	const closeSuccessAlertOnKey = (e: React.KeyboardEvent) => {
		e.preventDefault()
		if (e.code === 'Space' || e.key === 'Enter') setIsSuccess(false)
	}
	const closeErrorAlertOnKey = (e: React.KeyboardEvent) => {
		e.preventDefault()
		if (e.code === 'Space' || e.key === 'Enter') setError(false)
	}


	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} action="#" className={styles.commentForm}>
				<div className={styles.top}>
					<Input {...register('name', { required: { value: true, message: 'Заполните Имя!' } })}
						className={styles.input} placeholder='Имя' name='name' error={errors.name} aria-invalid={errors.name ? true : false} />
					<Input {...register('title', { required: { value: true, message: 'Заполните Заголовок!' } })}
						className={styles.input} placeholder='Заголовок отзыва' error={errors.title} aria-invalid={errors.name ? true : false} />

					<span className={styles.rating}>Оценка:
						<Controller control={control} name='rating'
							rules={({ required: { value: true, message: 'Заполните Имя!' } })}

							render={({ field }) => (
								<Rating rating={field.value} ref={field.ref} isEditable setRating={field.onChange} error={errors.rating}
									aria-invalid={errors.name ? true : false} />
							)
							} />
					</span>

				</div>
				<TextArea {...register('description', { required: { value: true, message: 'Заполните Заголовок!' } })}
					placeholder='Текст отзыва' className={styles.textArea} error={errors.description} aria-label='Текст отзыва'
					aria-invalid={errors.name ? true : false} />
				<div className={styles.bot}>
					<Button appearance='primary' className={styles.btn} onClick={() => clearErrors}>Отправить</Button>
					<span className={styles.caption}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>


			</form>

			{isSuccess && <div className={styles.success} role='alert'>
				<div className={styles.successTitle}>Ваш комментарий отправлен!</div>
				<div className={styles.successCaption}>Спасибо что отправили комментарий, он будет опубликован после проверки</div>
				<Button
					className={styles.closeBtn}
					aria-label='Закрыть оповещение'
					onClick={() => setIsSuccess(false)}
					onKeyDown={closeSuccessAlertOnKey}
				>
					<CloseIcon className={styles.successIcon} />
				</Button>

			</div>}
			{error && <div className={styles.error} role='alert'>
				<div className={styles.errorTitle}>Упс! Что то пошло не так, комментарий не отправлен</div>
				<div className={styles.errorCaption}>Просим прощения за причиненное неудобство, мы исправим это как можно скорее</div>
				<Button
					className={styles.closeBtn}
					aria-label='Закрыть оповещение'
					onClick={() => setError(false)}
					onKeyDown={closeErrorAlertOnKey}
				>
					<CloseIcon className={styles.errorIcon} /></Button>
			</div>}
		</>

	)
}

export default CommentForm