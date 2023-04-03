import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Tag.module.scss'
import Link from 'next/link'

interface PProps {
	children: ReactNode
	className?: string
	size?: 'small' | 'medium'
	color: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
	href?: string

}

export const Tag = ({ children, size = 'medium', color = 'ghost', href, className }: PProps) => {
	return (
		<div className={cn(styles.Tag, className, {
			[styles.small]: size === 'small',
			[styles.medium]: size === 'medium',
			[styles.ghost]: color === 'ghost',
			[styles.red]: color === 'red',
			[styles.gray]: color === 'gray',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary',
		})}
		>
			{
				href
					? <Link href={href}>{children}</Link>
					: <>{children}</>
			}
		</div>
	)
}
