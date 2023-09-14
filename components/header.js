import Link from 'next/link'

const logo100 = '/images/main-logo-100.webp'

export default function Header({ home }) {
  return (
    <header>
      <nav className='flex py-4 mx-4 place-content-center'>
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
              <picture>
                <img src={logo100} alt='Logo' width='100' height='100' />
              </picture>
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
