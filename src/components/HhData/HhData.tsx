import styles from './HhData.module.scss'
import { Card } from '../UI/Card/Card'
import { IHhData } from '@/interfaces/page.interface'
import RateIcon from './rate-star.svg'
import { priceRu } from '@/helpers/helpers'
interface HhDataProps extends IHhData {

}

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps) => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>


			<Card className={styles.salary}>
				<div className={styles.salaryItem}>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>



				<div className={styles.salaryItem}>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>

				<div className={styles.salaryItem}>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>

			</Card >

		</div >
	)
}
