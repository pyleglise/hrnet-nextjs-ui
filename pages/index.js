import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
// import styles from '../styles/Home.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
const logo = '/images/main-logo.png'
export default function Home({ allPostsData }) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='flex flex-col gap-10'>
        <img
          fetchpriority='high'
          rel='preload'
          // className='place-self-center shadow-2xl my-4 rounded-tl-[25%] rounded-br-[25%]'
          className={utilStyles['home-logo-img']}
          src={logo}
          alt='Wealth Health Logo'
          width='200'
          height='200'
        />
        {/* <div className='main-nav light-colors'> */}
        <div className='flex flex-row place-content-center gap-8'>
          {/* <div className='nav-container'> */}
          {true ? (
            <>
              <Link
                href='listEmployees'
                className={utilStyles['btn']}
                // onClick={() => dispatch(logingError(''))}
                // state={{ loginAction: 'login' }}
              >
                Employee list
              </Link>
              <Link
                href='createEmployee'
                className={utilStyles['btn']}
                // state={{ loginAction: 'signup' }}
              >
                Create employee
              </Link>
            </>
          ) : (
            <>
              {/* <MainMenu
                  isCreate={false}
                  isHome={true}
                  isUserList={false}
                  isView={false}
                  isLight={true}
                /> */}
            </>
          )}
        </div>
        {/* </div> */}
      </section>
      {/* <section className={utilStyles.headingMd}>
        <p>Je suis consultant en systèmes d’information et développeur.</p>
        <p>
          J’aide les TPE/PME à être plus efficaces dans l’utilisation de leurs
          outils informatiques. Mon objectif est qu’elles ne perdent pas de
          temps et d’énergie sur des questions techniques ou des tâches
          subalternes. Ainsi, elles gagnent du temps et elles peuvent se
          concentrer sur leur cœur de métier et fournir un meilleur service à
          leurs clients.
        </p>
        <p>
          C’est mon expérience variée des métiers de l’informatique qui me
          permet aujourd’hui d’apporter des solutions efficaces et pérennes à
          mes clients. Ils ont pu ainsi mettre à profit le temps gagné et
          augmenter leur chiffre d’affaires.
        </p>
        <p>
          Je crois fermement que l’informatique est un outil qui doit être au
          service du professionnel et non l’inverse. 😉
        </p>
        <p>
          Et vous, avez-vous déjà rencontré des difficultés dans l’utilisation
          de ces outils ?
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
