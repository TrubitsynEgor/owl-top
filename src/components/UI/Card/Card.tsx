import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Card.module.scss'
import { motion } from 'framer-motion'
interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	className?: string
	color?: 'white' | 'blue'
	variants: IVariantsChildren
}
interface IVariantsChildren {
	visible: {
		height: string | number,
		opacity: number,
		visibility: string
	},
	hidden: {
		height: string | number,
		opacity: number,
		visibility: string
	}
}

export const Card = motion(forwardRef(({ color = 'white', children, className, variants, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div className={cn(styles.card, className, {
			[styles.blue]: color === 'blue',
		})} ref={ref} {...props}>
			{children}
		</div>
	)
}))
