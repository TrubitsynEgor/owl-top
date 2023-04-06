import cn from 'classnames'
import Link from 'next/link'
import styles from './Menu.module.scss'
import { useContext, useState } from 'react'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '@/helpers/helpers'
import { motion } from 'framer-motion'
import { Button } from '@/components'




export const Menu = () => {

	const { menu, setMenu, firstCategory } = useContext(AppContext)
	const [announce, setAnnounce] = useState<'opened' | 'closed' | undefined>()
	const router = useRouter();
	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
			}
		},
		hidden: {
			marginBottom: 0
		}
	}
	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto'
		},
		hidden: {
			opacity: 0,
			height: 0
		}
	}


	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				setAnnounce(m.isOpened ? 'closed' : 'opened')
				m.isOpened = !m.isOpened
			}
			return m
		}))
	}

	const openSecondLevelKey = (key: React.KeyboardEvent, secondCategory: string) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault()
			openSecondLevel(secondCategory)
		}
	}

	const buildFirstLevel = () => {
		return (
			<ul>
				{firstLevelMenu.map(m => (
					<motion.li key={m.id} aria-expanded={m.id === firstCategory}>
						<Link href={`/${m.route}`} >
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id === firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</motion.li>
				))}
			</ul>
		)
	}
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true
					}
					return (
						<li key={m._id.secondCategory} >
							<Button tabIndex={0} aria-expanded={m.isOpened}
								onKeyDown={(key: React.KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</Button>
							<motion.ul
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock)}>
								{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
							</motion.ul>
						</li>
					)
				})}
			</ul>
		)
	}
	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return (

			pages.map(p => (
				<motion.li key={p._id} variants={variantsChildren} >
					<Link tabIndex={isOpened ? 0 : -1} href={`/${route}/${p.alias}`}
						aria-current={`/${route}/${p.alias}` === router.asPath ? 'page' : false}
						className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
						})}>
						{p.category}
					</Link>
				</motion.li>
			))

		)
	}

	return (
		<nav className={cn(styles.menu)} role='navigation'>
			{announce && <span role='log' className='visualyHidden'>{announce === 'opened' ? 'развернуто' : 'свернуто'}</span>}
			{buildFirstLevel()}
		</nav>
	)
}
