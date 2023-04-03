import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Benefit.module.scss'
import { Htag } from '../UI/Htag/Htag'
import BenefitIcon from './benefit.svg'
import { P } from '../UI/P/P'
import { TopPageAdvantage } from '@/interfaces/page.interface'

interface BenefitProps {
	advantages: TopPageAdvantage[]
	className?: string

}

export const Benefit = ({ advantages }: BenefitProps) => {
	return (

		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.benefit}>
					<BenefitIcon className={styles.icon} />
					<div className={styles.content}>
						<Htag tag='h3' className={styles.title}>{a.title}</Htag>
						<P size='large' className={styles.description}>{a.description}</P>
					</div >
				</div>

			))}

		</>
	)
}
