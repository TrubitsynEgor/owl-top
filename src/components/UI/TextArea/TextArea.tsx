import { DetailedHTMLProps, ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import styles from './TextArea.module.scss'
import { FieldError } from 'react-hook-form'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	error?: FieldError
}

export const TextArea = forwardRef(({ error, className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
	return (
		<div className={styles.wrapper}>
			<textarea ref={ref} id={props.name} className={cn(className, styles.textArea, {
				[styles.error]: error
			})} {...props} />
			{error && <span>{error.message}</span>}
		</div>
	)
})
