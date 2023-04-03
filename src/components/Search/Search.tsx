import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './Search.module.scss'
import SearchIcon from './search.svg'
import { Input } from '../Input/Input'
import { Button } from '../UI/Button/Button'
import { useRouter } from 'next/router'

interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Search = ({ className, ...props }: SearchProps) => {

	const [search, setSearch] = useState<string>('')
	const router = useRouter()

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}

		})
		setSearch('')
	}
	const goToSearchKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch()
			setSearch('')
		}
	}

	return (
		<div className={styles.search} {...props}>
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => goToSearchKeyDown(e)}
				style={{ width: '230px', height: '36px' }}
				placeholder='Поиск...' type='search' name='Search' />

			<Button onClick={goToSearch} appearance='primary' className={styles.btn}>
				<SearchIcon />
			</Button>
		</div>
	)
}
