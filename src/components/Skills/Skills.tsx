import cn from 'classnames'
import styles from './Skills.module.scss'
import { Htag } from '../Htag/Htag'
import { Tag } from '../Tag/Tag'

interface SkillsProps {
	className?: string
	tags?: string[]
}

export const Skills = ({ className, tags }: SkillsProps) => {
	return (
		<div className={cn(styles.skills, className, {
		})}>
			<Htag tag='h2' className={styles.title}>Получаемые навыки</Htag>

			<div className={styles.tags}>
				{tags?.map(tag => (
					<Tag key={tag} color='primary' size='small'>{tag}</Tag>
				))}

			</div>
		</div>
	)
}
