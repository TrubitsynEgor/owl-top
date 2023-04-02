import { Card, HhData, Htag, Tag } from '@/components'
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import styles from './TopPageComponent.module.scss'



export interface TopPageComponentProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory
	page: TopPageModel
	products: ProductModel[]
}


const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products.length && <Tag color='gray'>{products.length}</Tag>}
				<span>Sort</span>
			</div>
			{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' href='https://hh.ru/'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}

		</div>

	)
}

export default TopPageComponent