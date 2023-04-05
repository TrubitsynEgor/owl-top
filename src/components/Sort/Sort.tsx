import { DetailedHTMLProps, HTMLAttributes } from 'react'
import SortIcon from './sort.svg'
import classNames from 'classnames'
import styles from './Sort.module.scss'
import { SortActions } from '@/page-components/TopPageComponent/sort.reducer'


interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum
	setSort: (sort: SortEnum) => void
}
export enum SortEnum {
	Rating,
	Price
}

const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
	return (
		<div className={classNames(styles.sort, className)}  {...props}>
			<button onClick={() => setSort(SortEnum.Rating)}
				className={classNames({
					[styles.active]: sort === SortEnum.Rating
				})}
			>
				<SortIcon className={styles.icon} />По рейтингу
			</button>
			<button onClick={() => setSort(SortEnum.Price)}
				className={classNames({
					[styles.active]: sort === SortEnum.Price
				})}
			>
				<SortIcon className={styles.icon} />По цене
			</button>
		</div >
	)
}

export default Sort