import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/404.module.scss'
import utilStyles from '../styles/utils.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Custom404() {
  const router = useRouter()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className='main-home'>
        <section className='half-screen-height bg-dark-round-corner'>
          <h2 className={styles['error-num']}>404</h2>
          <p className={styles['error-txt']}>
            Oups !!
            <br />
            The requested page does not exist.
          </p>
          <button
            href='/'
            className={utilStyles['button']}
            onClick={() => router.back()}
          >
            <FontAwesomeIcon
              className={utilStyles['fa-small']}
              icon={faArrowLeft}
            />{' '}
            Back
          </button>
        </section>
      </main>
    </Layout>
  )
}
