import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Sidebar.module.scss'
import { Menu } from '../Menu/Menu'


interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ ...props }: SidebarProps) => {
	return (
		<div {...props}>
			<Menu />
		</div>
	)
}
