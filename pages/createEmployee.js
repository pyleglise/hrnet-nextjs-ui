import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function CreateEmployees() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Create Employees</h1>
      </section>
    </Layout>
  )
}
