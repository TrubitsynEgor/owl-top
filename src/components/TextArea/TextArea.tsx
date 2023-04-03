import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './TextArea.module.scss'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
}

export const TextArea = ({ className, ...props }: TextAreaProps) => {
	return (
		<textarea id={props.name} className={cn(className, styles.textArea)} {...props} />
	)
}
