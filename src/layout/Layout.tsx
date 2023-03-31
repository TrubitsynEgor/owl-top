import { Component, FunctionComponent, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Layout.module.scss'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Header />
			<div>
				<Sidebar />
				<main>
					{children}
				</main>
			</div>
			<Footer />
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
