import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './P.module.scss'

interface PProps {
	children: ReactNode
	size?: 'small' | 'medium' | 'large'
	className?: string
}

export const P = ({ children, size = 'medium', className }: PProps) => {
	return (
		<p className={cn(styles.P, className, {
			[styles.small]: size === 'small',
			[styles.large]: size === 'large'
		})}>
			{children}
		</p>
	)
}
