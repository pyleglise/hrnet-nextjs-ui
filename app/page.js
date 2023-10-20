import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.scss'
import logo from '../public/images/main-logo-200.webp'
export const metadata = {
  title: 'HR-Net - Home',
  description: 'HR-Net - Home - Employee database manager - version app-router',
}
export default function Home(home) {
  
  // console.log(process.env.NEXT_PUBLIC_API_URL + '/employees')
  return (
    <section className='flex flex-col gap-10'>
      <Image
      
        // className='place-self-center shadow-2xl my-4 rounded-tl-[25%] rounded-br-[25%]'
        className={utilStyles['home-logo-img']}
        src={logo}
        alt='Wealth Health Logo'
        priority={true}
      />
      {/* <div className='main-nav light-colors'> */}
      <div className='flex flex-row place-content-center gap-8'>
        <Link
          href='employees'
          className={utilStyles['btn']}
          aria-label='Show employees'
          // onClick={() => dispatch(logingError(''))}
          // state={{ loginAction: 'login' }}
        >
          Show Employees
        </Link>
        <Link
          href='employee/new'
          aria-label='Add employee'
          className={utilStyles['btn']}
          // state={{ loginAction: 'signup' }}
        >
          Add employee
        </Link>
      </div>
      {/* </div> */}
    </section>
  )
}
