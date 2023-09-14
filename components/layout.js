import Head from 'next/head'

import utilStyles from '../styles/utils.module.scss'

import Header from './header'
import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
config.autoAddCss = false

const name = 'Pierre-Yves Léglise'
export const siteTitle = 'HR-Net - Employee database manager'

export default function Layout({ children, home }) {
  const router = useRouter()
  return (
    // <div className={styles.container}>
    <div className='flex flex-col place-content-start mx-auto h-screen max-w-[1400px]'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Manage your employee database' />

        <meta name='og:title' content={siteTitle} />
      </Head>
      <Header home={home} />

      <main className='flex flex-col mx-4 bg-bg-color-xlight place-content-evenly h-[82vh]'>
        {/* <main className='main-home'> */}
        {children}
        {!home && (
          <button
            className={utilStyles['button']}
            onClick={() => router.back()}
          >
            <FontAwesomeIcon
              className={utilStyles['fa-small']}
              icon={faArrowLeft}
            />{' '}
            Back
          </button>
        )}
      </main>
      <Footer />
    </div>
  )
}

{
  /* <header className={styles.header}>
        
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header> */
}
