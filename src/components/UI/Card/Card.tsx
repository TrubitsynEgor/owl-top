import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Card.module.scss'

interface CardProps {
	children: ReactNode
	className?: string
	color?: 'white' | 'blue'
}

export const Card = ({ color = 'white', children, className }: CardProps) => {
	return (
		<div className={cn(styles.card, className, {
			[styles.blue]: color === 'blue',
		})}>
			{children}
		</div>
	)
}
