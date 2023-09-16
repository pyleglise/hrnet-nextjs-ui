import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Menu({ listEmployees, createEmployee }) {
  return (
    <div className='text-primary-color'>
      <Link
        href='/'
        className={utilStyles['btn']}
        aria-label='Home'
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      {listEmployees ? (
        <Link
          href='createEmployee'
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
          href='listEmployees'
          className={utilStyles['btn']}
          aria-label='List employees'
        >
          List employees
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}
