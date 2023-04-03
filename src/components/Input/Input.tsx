import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'
import SearchIcon from './search.svg'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	isIcon: boolean
}

export const Input = ({ isIcon, className, ...props }: InputProps) => {
	return (
		<label htmlFor={props.name} className={styles.label}>
			<input id={props.name} className={cn(className, styles.input)} {...props} />
			{isIcon && <div className={styles.iconWrapper}> <SearchIcon className={styles.icon} /></div>}
		</label>
	)
}
