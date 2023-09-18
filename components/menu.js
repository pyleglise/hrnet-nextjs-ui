import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Menu({ showEmployees, createEmployee }) {
  return (
    <div className='text-primary-color'>
      <Link
        href='/'
        className={utilStyles['btn']}
        aria-label='Home'
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      {showEmployees ? (
        <Link
          href='employee/new'
          className={utilStyles['btn']}
          aria-label='Add employee'
        >
          Add employee
        </Link>
      ) : (
        ''
      )}
      {createEmployee ? (
        <Link
          href='../employees'
          className={utilStyles['btn']}
          aria-label='Show employees'
        >
          Show employees
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}
