import { Component, FunctionComponent, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Layout.module.scss'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import { AppContextProvider, IAppContext } from '@/context/app.context'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />

			<Sidebar className={styles.sidebar} />

			<main className={styles.body}>
				{children}
			</main>

			<Footer className={styles.footer} />
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
