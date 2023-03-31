import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import ArrayIcon from './arrow.svg'


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
	appearance: 'primary' | 'ghost'
	arrow?: 'right' | 'down' | 'none'
}

export const Button = ({ children, appearance, arrow = 'none', className, ...props }: ButtonProps) => {
	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost'
		})}  {...props}>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down'
			})}>
				<ArrayIcon />
			</span>}
		</button>
	)
}
