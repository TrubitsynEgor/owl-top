import { FunctionComponent, KeyboardEvent, ReactNode, useRef, useState } from 'react'
import cn from 'classnames'
import styles from './Layout.module.scss'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import { AppContextProvider, IAppContext } from '@/context/app.context'
import { Up } from '@/components'
import { useScrollY } from '@/hooks/useScrollY'
import Link from 'next/link'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const [displayed, setDisplayed] = useState(false)

	const skipContent = (key: KeyboardEvent) => {
		if (key.key == 'Enter' || key.code === 'Space') {
			key.preventDefault();
			contentRef.current?.focus()
			setDisplayed(false)
		}
		setDisplayed(false)

	}
	const y = useScrollY()
	return (
		<div className={styles.wrapper}>

			<Link
				aria-label='Перейти к содержанию'
				onKeyDown={(e) => skipContent(e)}
				onFocus={() => setDisplayed(true)}
				className={cn(styles.skipLink, {
					[styles.displayed]: displayed
				})} tabIndex={1} href='#'>Сразу к содержанию
			</Link>

			<Header className={styles.header} />

			<Sidebar className={styles.sidebar} />

			<main tabIndex={0} ref={contentRef} className={styles.body} role='main'>
				{children}
			</main>

			<Footer className={styles.footer} />

			{y > 2000 && <Up />}
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		)
	}
}
