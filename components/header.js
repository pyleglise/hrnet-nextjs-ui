import Link from 'next/link'
import Image from 'next/image'
import logo100 from '../public/images/main-logo-100.webp'
import Menu from './menu'

const showNoMenuHeader = (
  <div className='py-4 mx-4'>
    <p className='text-3xl text-primary-color'>
      HR-Net • Employee database management tool
    </p>
  </div>
)
export default function Header({ home, showEmployees, createEmployee }) {
  return (
    <header>
      <nav className='flex m-4 place-content-center'>
        {home
          ? showNoMenuHeader
          : showMenuHeader(showEmployees, createEmployee)}
      </nav>
    </header>
  )
}
function showMenuHeader(showEmployees, createEmployee) {
  return (
    <>
      <Link
        className='bg-bg-color-xlight rounded-tl-3xl rounded-br-3xl'
        href='/'
      >
        <Image
          src={logo100}
          alt='Logo'
          priority={true}
        />
      </Link>

      <div className='flex justify-end w-full'>
        <Menu
          showEmployees={showEmployees}
          createEmployee={createEmployee}
        />
      </div>
    </>
  )
}
