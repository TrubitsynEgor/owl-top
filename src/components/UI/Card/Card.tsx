import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Card.module.scss'

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	className?: string
	color?: 'white' | 'blue'
}

export const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div className={cn(styles.card, className, {
			[styles.blue]: color === 'blue',
		})} ref={ref} {...props}>
			{children}
		</div>
	)
})
