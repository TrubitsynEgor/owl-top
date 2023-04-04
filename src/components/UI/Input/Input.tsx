import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<input ref={ref} id={props.name} className={cn(className, styles.input)} {...props} />
	)
})
