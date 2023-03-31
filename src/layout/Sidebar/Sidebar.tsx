import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Sidebar.module.scss'


interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ ...props }: SidebarProps) => {
	return (
		<div {...props}>
			<h2>SIDEBAR</h2>
		</div>
	)
}
