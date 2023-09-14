import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function ListEmployees() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>List Employees</h1>
      </section>
    </Layout>
  )
}
