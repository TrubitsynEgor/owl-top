import { DetailedHTMLProps, ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import styles from './TextArea.module.scss'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
}

export const TextArea = forwardRef(({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
	return (
		<textarea ref={ref} id={props.name} className={cn(className, styles.textArea)} {...props} />
	)
})
