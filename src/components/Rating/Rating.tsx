import { ForwardedRef, KeyboardEvent, forwardRef, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import styles from './Rating.module.scss'
import StarIcon from './star.svg'
import { FieldError } from 'react-hook-form'

interface RatingProps {
	className?: string
	isEditable?: boolean
	rating: number
	setRating?: (rating: number) => void
	error?: FieldError

}

export const Rating = forwardRef(({ className, isEditable = false, rating, setRating, error }: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const computeFocus = (rating: number, i: number): number => {
		if (!isEditable) return -1
		if (!rating && i == 0) return 0
		if (rating == i + 1) return 0
		return -1
	}


	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable
				})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onMouseDown={(e) => e.preventDefault()}
					onClick={() => onClick(i + 1)}
					tabIndex={computeFocus(rating, i)}
					onKeyDown={handleKey}
					ref={r => ratingArrayRef.current?.push(r)}
					aria-label='Оценить курс'
				>
					<StarIcon />
				</span>
			)
		})
		setRatingArray(updatedArray)
	}
	const changeDisplay = (i: number) => {
		if (!isEditable) return
		constructRating(i)
	}
	const onClick = (i: number) => {
		if (!isEditable || !setRating) return
		setRating(i)
	}

	const handleKey = (e: KeyboardEvent) => {
		if (!isEditable || !setRating) {
			return
		}

		if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
			if (!rating) {
				setRating(1)
			} else {
				e.preventDefault()
				setRating(rating < 5 ? rating + 1 : 5)
				ratingArrayRef.current[rating]?.focus()
			}

		}
		if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
			e.preventDefault()
			setRating(rating > 1 ? rating - 1 : 1)
			ratingArrayRef.current[rating - 2]?.focus()
		}

	}
	return (
		<div className={cn(styles.Rating, className, {
			[styles.error]: error
		})}>
			{ratingArray.map((rating, i) => (<span key={i}>{rating}</span>))}
			{error && <span className={styles.errorMessage}>Поставьте оценку!</span>}
		</div>
	)
}
)