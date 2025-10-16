import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Experience from '../components/Experience'

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience - Portfolio</title>
        <meta name="description" content="My professional experience and career journey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Layout>
        <Experience />
      </Layout>
    </>
  )
}

export default ExperiencePage

