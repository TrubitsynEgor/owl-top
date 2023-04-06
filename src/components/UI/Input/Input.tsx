import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'
import { FieldError } from 'react-hook-form'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	error?: FieldError
}

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<div className={cn(styles.inputWrapper, className)} {...props}>
			<input ref={ref} id={props.name} className={cn(className, styles.input, {
				[styles.error]: error
			})} {...props} />
			{error && <span role='alert'>{error.message}</span>}
		</div>

	)
})
