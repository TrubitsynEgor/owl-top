import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Sidebar.module.scss'
import { Menu } from '../Menu/Menu'
import Logo from '../logo.svg'
import Link from 'next/link'
import { Search } from '@/components'



interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ className, ...props }: SidebarProps) => {
	return (
		<div className={cn(className, styles.sidebar)} {...props} >
			<Link href='/'><Logo className={styles.sidebarLogo} /> </Link>
			<Search />
			<Menu />
		</div>
	)
}
