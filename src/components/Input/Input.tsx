import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<input id={props.name} className={cn(className, styles.input)} {...props} />
	)
}
