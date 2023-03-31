
import { Button, Htag, P, Rating, Tag } from '@/components'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [rating, setRating] = useState(4)


  return (

    <div>

      <Htag tag='h1'>Test</Htag>
      <Button appearance='primary' arrow='right' >Click</Button>
      <Button appearance='ghost' arrow='right'>Click</Button>
      <P size='small'>Это мой кастомный параграф</P>
      <P >Это мой кастомный параграф</P>
      <P size='large'>Это мой кастомный параграф</P>

      <Tag size='small' color='ghost' >маленький и гост</Tag>
      <Tag color='ghost' >средний и гост</Tag>

      <Tag size='small' color='red' >маленький и red</Tag>
      <Tag color='red' >средний и red</Tag>

      <Tag size='small' color='green' >маленький и green</Tag>
      <Tag color='green' >средний и гост</Tag>

      <Tag size='small' color='primary' >маленький и primary</Tag>
      <Tag color='primary' >средний и гост</Tag>

      <Tag size='small' color='gray' >маленький и gray</Tag>
      <Tag color='gray' >средний и gray</Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating} />

    </div>
  )

}