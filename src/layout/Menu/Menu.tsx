import cn from 'classnames'
import Link from 'next/link'
import styles from './Menu.module.scss'
import { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import CoursesIcon from './icons/courses.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'
import ServicesIcon from './icons/services.svg'
import { TopLevelCategory } from '@/interfaces/page.interface'


const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]


export const Menu = () => {

	const { menu, setMenu, firstCategory } = useContext(AppContext)

	return (
		<div className={cn(styles.menu)}>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	)
}
