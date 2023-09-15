import Link from 'next/link'
import Image from 'next/image'

import logo100 from '../public/images/main-logo-100.webp'

export default function Header({ home }) {
  return (
    <header>
      <nav className='flex m-4 place-content-center'>
        {home ? (
          <div className='py-4 mx-4'>
            <p className='text-3xl text-primary-color'>
              HR-Net • Employee database management tool
            </p>
          </div>
        ) : (
          <>
            {/* <> */}
            <Link
              className='bg-bg-color-xlight rounded-tl-3xl rounded-br-3xl'
              href='/'
            >
              <Image src={logo100} alt='Logo' />
            </Link>

            <div className='grow'>
              <div className='text-4xl text-primary-color' home={home}>
                Main Menu
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
