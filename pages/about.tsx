import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import About from '../components/About'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Portfolio</title>
        <meta name="description" content="Learn more about my background, skills, and approach to development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Layout>
        <About />
      </Layout>
    </>
  )
}

export default AboutPage

