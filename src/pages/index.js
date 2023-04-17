import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/form'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
      <h1>Welcome to JobH</h1>
      <p>JobH is a tool to help your prep for your next job. Currently is in Alpha mode</p>
      </main>
    </>
  )
}
