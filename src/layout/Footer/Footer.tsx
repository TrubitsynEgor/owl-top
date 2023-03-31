import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Footer.module.scss'


interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({ ...props }: FooterProps) => {
	return (
		<div {...props}>
			<h2>FOOTER</h2>
		</div>
	)
}
