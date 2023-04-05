import { DetailedHTMLProps, FormHTMLAttributes, HTMLAttributes, useState } from 'react'
import styles from './Search.module.scss'
import SearchIcon from './search.svg'
import { Input } from '../UI/Input/Input'
import { Button } from '../UI/Button/Button'
import { useRouter } from 'next/router'

interface SearchProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
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
		<form className={styles.search} {...props} role='search'>
			<Input
				className={styles.input}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => goToSearchKeyDown(e)}
				placeholder='Поиск по сайту...' type='search' name='Search' />

			<Button aria-label='Поиск по сайту' onClick={goToSearch} appearance='primary' className={styles.btn}>
				<SearchIcon />
			</Button>
		</form>
	)
}
