import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Card.module.scss'

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	className?: string
	color?: 'white' | 'blue'
}

export const Card = ({ color = 'white', children, className, ...props }: CardProps) => {
	return (
		<div {...props} className={cn(styles.card, className, {
			[styles.blue]: color === 'blue',
		})}>
			{children}
		</div>
	)
}
