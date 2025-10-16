import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Skills from '../components/Skills'

const SkillsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Nechama Shomron</title>
        <meta name="description" content="My technical skills and expertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Layout>
        <Skills />
      </Layout>
    </>
  )
}

export default SkillsPage


