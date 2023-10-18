
'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo100 from '../public/images/main-logo-100.webp'
import Menu from './menu'
import { usePathname } from 'next/navigation'

const showNoMenuHeader = (
  <div className='py-4 mx-4'>
    <p className='text-3xl text-primary-color'>
      HR-Net • Employee database management tool
    </p>
  </div>
)
export default function Header() {
  const pathname=usePathname()
  const home=pathname==='/'
  return (
    <header>
      <nav className='flex m-4 place-content-center'>
        {home
          ? showNoMenuHeader
          : showMenuHeader()}
      </nav>
    </header>
  )
}
function showMenuHeader() {
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
        <Menu />
      </div>
    </>
  )
}
