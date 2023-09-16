import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
// import { getSortedPostsData } from '../lib/posts'
import logo from '../public/images/main-logo-200.webp'
// import { useDispatch } from 'react-redux'
// import { setEmployeeList } from '../redux/reducers'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }

export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_API_URL + '/employees')
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='flex flex-col gap-10'>
        <Image
          // className='place-self-center shadow-2xl my-4 rounded-tl-[25%] rounded-br-[25%]'
          className={utilStyles['home-logo-img']}
          src={logo}
          alt='Wealth Health Logo'
        />
        {/* <div className='main-nav light-colors'> */}
        <div className='flex flex-row place-content-center gap-8'>
          <Link
            href='listEmployees'
            className={utilStyles['btn']}
            // onClick={() => dispatch(logingError(''))}
            // state={{ loginAction: 'login' }}
          >
            List Employees
          </Link>
          <Link
            href='createEmployee'
            className={utilStyles['btn']}
            // state={{ loginAction: 'signup' }}
          >
            Add employee
          </Link>
        </div>
        {/* </div> */}
      </section>
    </Layout>
  )
}
