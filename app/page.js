import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.scss'
import logo from '../public/images/main-logo-200.webp'

/**
 * Metadata related to the Home component.
 * @type {Object}
 */
export const metadata = {
  title: 'HR-Net - Home',
  description: 'HR-Net - Home - Employee database manager - version app-router',
}

/**
 * Home component that displays the main logo and navigation links.
 *
 * @namespace
 * @param {Object} home - Component props.
 * @returns {ReactElement} The rendered component.
 */
const Home = (home) => {
  // Uncomment the following line to log the API URL with employee endpoint
  // console.log(process.env.NEXT_PUBLIC_API_URL + '/employees')

  return (
    <section className="flex flex-col gap-10">
      <Image
        className={utilStyles['home-logo-img']}
        src={logo}
        alt="Wealth Health Logo"
        priority={true}
      />
      <div className="flex flex-row place-content-center gap-8">
        <Link
          href="employees"
          className={utilStyles['btn']}
          aria-label="Show employees"
          // Uncomment the following line to dispatch a logging error when the link is clicked
          // onClick={() => dispatch(logingError(''))}
          // state={{ loginAction: 'login' }}
        >
          Show Employees
        </Link>
        <Link
          href="employee/new"
          aria-label="Add employee"
          className={utilStyles['btn']}
          // state={{ loginAction: 'signup' }}
        >
          Add employee
        </Link>
      </div>
    </section>
  )
}

export default Home
