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
			<div className={styles.sortName} id='sort'>Сортировка</div>
			<button id='rating' onClick={() => setSort(SortEnum.Rating)}
				className={classNames({
					[styles.active]: sort === SortEnum.Rating
				})}
				aria-selected={sort === SortEnum.Rating}
				aria-labelledby='sort rating'
			>
				<SortIcon className={styles.icon} />По рейтингу
			</button>
			<button id='price' onClick={() => setSort(SortEnum.Price)}
				className={classNames({
					[styles.active]: sort === SortEnum.Price
				})}
				aria-selected={sort === SortEnum.Price}
				aria-labelledby='sort price'
			>
				<SortIcon className={styles.icon} />По цене
			</button>
		</div >
	)
}

export default Sort