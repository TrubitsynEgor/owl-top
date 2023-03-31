import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Header.module.scss'


interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header = ({ ...props }: HeaderProps) => {
	return (
		<div {...props}>
			<h2>HEADER</h2>
		</div>
	)
}
