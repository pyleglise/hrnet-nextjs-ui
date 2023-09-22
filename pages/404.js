import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle + ' - Error ! Resource not found !'}</title>
      </Head>

      <section className='place-self-center p-4 w-1/2 rounded-2xl bg-bg-color-light'>
        <h2 className='text-alert text-5xl font-bold m-6'>404</h2>

        <p className='text-bg-color-xlight text-3xl m-4'>
          Oups !!
          <br />
          The requested page does not exist.
        </p>
      </section>
    </Layout>
  )
}
