import { HtagProps } from './Htag.props'
import styles from './Htag.module.scss'
import cl from 'classnames'


export const Htag = ({ children, tag, className }: HtagProps) => {
	switch (tag) {
		case 'h1':
			return <h1 className={cl(styles.h1, className)}>{children}</h1>
		case 'h2':
			return <h2 className={cl(styles.h2, className)}>{children}</h2>
		case 'h3':
			return <h3 className={cl(styles.h3, className)}>{children}</h3>
		default:
			return <></>
	}
}
