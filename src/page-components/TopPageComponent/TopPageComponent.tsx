import { Benefit, Benefits, Card, HhData, Htag, P, Skills, Tag } from '@/components'
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import styles from './TopPageComponent.module.scss'
import Sort, { SortEnum } from '@/components/Sort/Sort'



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
				<Sort sort={SortEnum.Rating} setSort={() => { }} />
			</div>

			{products && products.map(p => (<div key={p._id}>{p.title}</div>))}

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