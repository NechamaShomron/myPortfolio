import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Full Stack Developer</title>
        <meta name="description" content="Full-stack developer passionate about building innovative, reliable applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
