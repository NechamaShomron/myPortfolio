import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Portfolio</title>
        <meta name="description" content="Get in touch with me for collaboration opportunities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Layout>
        <Contact />
      </Layout>
    </>
  )
}

export default ContactPage
