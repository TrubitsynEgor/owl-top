
import { Button, Htag } from '@/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (

    <div>

      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Click</Button>
      <Button appearance='ghost' arrow='right'>Click</Button>
    </div>
  )

}
