import { GetStaticProps } from 'next'
import { Button, Htag, Input, P, Rating, Tag, TextArea } from '@/components'
import { withLayout } from '@/layout/Layout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'
import CommentForm from '@/components/CommentForm/CommentForm'
import { API } from '@/helpers/api'

const inter = Inter({ subsets: ['latin'] })

function Home({ menu }: HomeProps) {

  const [rating, setRating] = useState(4)


  return (
    <>
      <Head>
        <title>onw top - training</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

        <TextArea placeholder='Текст отзыва' />



      </div>
    </>
  )

}


export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}