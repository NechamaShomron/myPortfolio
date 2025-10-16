import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Nechama Shomron</title>
        <meta name="description" content="Explore my portfolio of web development projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <Projects />
      </Layout>
    </>
  )
}

export default ProjectsPage


