import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Logo from '../logo.svg'
import Open from './menu-open.svg'
import Close from './menu-close.svg'
import { Button } from '@/components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar'
import { useRouter } from 'next/router'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header = ({ className, ...props }: HeaderProps) => {

	const router = useRouter()

	useEffect(() => {
		setMenuIsOpen(false)
		return () => {

		}
	}, [router])


	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const handleMenu = () => {
		setMenuIsOpen((prev) => prev = !prev)
	}

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	}
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Link href='/'><Logo /></Link>
			<Button onClick={handleMenu} className={cn(styles.btn, styles.open)} appearance='ghost'><Open /></Button>
			{menuIsOpen && <motion.div className={styles.mobileMenu}
				variants={variants} initial={'closed'} animate={menuIsOpen ? 'opened' : 'closed'}>
				<Sidebar />
				<Button onClick={handleMenu} className={cn(styles.btn, styles.close)} appearance='ghost'><Close /></Button>
			</motion.div>}
		</header>
	)
}
