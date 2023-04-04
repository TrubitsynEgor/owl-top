import { ForwardedRef, KeyboardEvent, forwardRef, useEffect, useState } from 'react'
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

	useEffect(() => {
		constructRating(rating)
	}, [rating])


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
					onClick={() => onClick(i + 1)}>
					<StarIcon

						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
					/>
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

	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code !== 'Space' || !setRating) {
			return
		}
		setRating(i)
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