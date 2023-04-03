import { Benefit, HhData, Htag, Skills, Tag } from '@/components'
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import styles from './TopPageComponent.module.scss'
import Sort, { SortEnum } from '@/components/Sort/Sort'
import { useReducer } from 'react'
import { sortReducer } from './sort.reducer'
import Product from '@/components/Product/Product'



export interface TopPageComponentProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory
	page: TopPageModel
	products: ProductModel[]
}


const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {

	const [{ products: sortProducts, sort }, dispatch] = useReducer(sortReducer, {
		products, sort: SortEnum.Rating
	})

	const setSort = (sort: SortEnum) => {
		dispatch({ type: sort })
	}

	return (
		<div className={styles.wrapper}>

			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products.length && <Tag color='gray'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>

			{sortProducts && sortProducts.map(p => (<Product product={p} key={p._id} />))}

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' href='https://hh.ru/'>hh.ru</Tag>
			</div>

			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

			{page.advantages && page.advantages.length > 0 &&
				<div className={styles.benefits}>
					<Htag tag='h2' className={styles.title}>Преимущества</Htag>
					<Benefit advantages={page.advantages} />
					{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{
						__html: page.seoText
					}} />

					}
				</div>}

			{page.tags && <Skills tags={page.tags} />}



		</div>

	)
}

export default TopPageComponent