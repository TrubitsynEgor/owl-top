import cn from 'classnames'
import Link from 'next/link'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Footer.module.scss'
import { format } from 'date-fns'


interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer {...props} className={cn(className, styles.footer)}>
			<div className={styles.wrapper}>
				<span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
				<Link href='#' target='_blank' className={styles.agreement}>Пользовательское соглашение</Link>
				<Link href='#' target='_blank' className={styles.politics}>Политика конфиденциальности</Link>
			</div>
		</footer>
	)
}
