import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Up.module.scss'
import GoTopIcon from './go-top.svg'
import { Button } from '../Button/Button'
import { useScrollY } from '@/hooks/useScrollY'

interface UpProps {
}

export const Up = ({ }: UpProps) => {

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}
	return (
		<Button appearance='primary' className={styles.up} onClick={scrollTop}>
			<GoTopIcon />
		</Button>
	)
}
