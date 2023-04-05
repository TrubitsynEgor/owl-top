import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Tag.module.scss'
import Link from 'next/link'

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	size?: 'small' | 'medium'
	color: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
	href?: string

}

export const Tag = ({ children, size = 'medium', color = 'ghost', href, className, ...props }: PProps) => {
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
			{...props}
		>
			{
				href
					? <Link href={href}>{children}</Link>
					: <>{children}</>
			}
		</div>
	)
}
