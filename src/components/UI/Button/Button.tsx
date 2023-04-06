import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardedRef, ReactNode, forwardRef } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import ArrayIcon from './arrow.svg'


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
	appearance?: 'primary' | 'ghost' | 'none'
	arrow?: 'right' | 'down' | 'none'
}
//TODO Есть 5 свойств у motion.button котороые конфликтуют м TS будет ругатся, фиксим исключением этих свойств из DetailedHTMLProps
//? Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 
//? 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'>

export const Button = forwardRef(({ children, appearance = 'none', arrow = 'none', className, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost',
		})}  {...props}>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow === 'down'
			})} ref={ref}>
				<ArrayIcon />
			</span>}
		</button>
	)
})
